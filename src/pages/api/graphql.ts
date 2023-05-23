import { createSchema, createYoga } from 'graphql-yoga'
import type { NextApiRequest, NextApiResponse } from 'next'
import { OAuth2Client } from 'google-auth-library'
import { google } from 'googleapis'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  graphqlEndpoint: '/api/graphql',
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        greetings: String
      }

      type Mutation {
        verifyIdToken(idToken: String!): String
        getTokenByCode(code: String!): String
      }
    `,
    resolvers: {
      Query: {
        greetings: () =>
          'This is the `greetings` field of the root `Query` type',
      },
      Mutation: {
        verifyIdToken: async (_, { idToken }: { idToken: string }) => {
          const client = new OAuth2Client()
          const ticket = await client.verifyIdToken({
            idToken,
            audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          })
          const payload = ticket.getPayload()

          return payload?.email
        },
        getTokenByCode: async (_, { code }: { code: string }) => {
          const client = new google.auth.OAuth2({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            redirectUri: 'postmessage',
          })
          const { tokens } = await client.getToken(code)

          if (!tokens.id_token) {
            throw new Error('No id_token')
          }

          const ticket = await client.verifyIdToken({
            idToken: tokens.id_token,
            audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          })
          const payload = ticket.getPayload()

          return payload?.email
        },
      },
    },
  }),
})

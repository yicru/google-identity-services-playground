import {
  Box,
  Container,
  Divider,
  Grid,
  HStack,
  Spinner,
  Text,
} from '@chakra-ui/react'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { graphql } from '@/lib/gql'
import { useMutation } from 'urql'

const VerifyIdToken = graphql(/* GraphQL */ `
  mutation VerifyIdToken($idToken: String!) {
    verifyIdToken(idToken: $idToken)
  }
`)

export default function Home() {
  const [{ fetching, data }, verifyIdToken] = useMutation(VerifyIdToken)

  const onSignIn = async (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) return

    await verifyIdToken({ idToken: credentialResponse.credential })
  }

  return (
    <Container as={Grid} gap={4} py={8}>
      <Text fontSize={'2xl'} fontWeight={'semibold'}>
        Google Identity Services Playground
      </Text>

      <Divider />

      <HStack>
        <Text fontWeight={'semibold'} color={'gray.600'}>
          Sign In With Google
        </Text>
        {fetching && <Spinner size={'xs'} />}
      </HStack>
      <GoogleLogin
        onSuccess={onSignIn}
        onError={() => {
          alert('Login Failed')
        }}
      />
      {data && (
        <Grid gap={2} bg={'gray.200'} py={2} px={3} rounded={'md'}>
          <Text fontSize={'sm'}>Logged In As : {data.verifyIdToken}</Text>
        </Grid>
      )}
    </Container>
  )
}

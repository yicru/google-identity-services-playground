import { Box, Text } from '@chakra-ui/react'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { graphql } from '@/lib/gql'
import { useMutation } from 'urql'

const VerifyIdToken = graphql(/* GraphQL */ `
  mutation VerifyIdToken($idToken: String!) {
    verifyIdToken(idToken: $idToken)
  }
`)

export const SignInWithGoogleFlow = () => {
  const [{ fetching, data }, verifyIdToken] = useMutation(VerifyIdToken)

  const onSignIn = async (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) return

    await verifyIdToken({ idToken: credentialResponse.credential })
  }

  return (
    <Box>
      <GoogleLogin
        onSuccess={onSignIn}
        onError={() => {
          alert('Login Failed')
        }}
      />
      {(fetching || data) && (
        <Box
          bg={'gray.200'}
          py={2}
          px={3}
          rounded={'md'}
          fontSize={'sm'}
          mt={4}
        >
          {fetching && <Text>loading...</Text>}
          {data && <Text>Logged In As : {data?.verifyIdToken}</Text>}
        </Box>
      )}
    </Box>
  )
}

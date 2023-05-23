import { Box, Button, Text } from '@chakra-ui/react'
import { useGoogleLogin } from '@react-oauth/google'
import { graphql } from '@/lib/gql'
import { useMutation } from 'urql'

const GetTokenByCode = graphql(/* GraphQL */ `
  mutation GetTokenByCode($code: String!) {
    getTokenByCode(code: $code)
  }
`)

export const OAuth2Flow = () => {
  const [{ fetching, data }, getTokenByCode] = useMutation(GetTokenByCode)

  const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (codeResponse) => {
      await getTokenByCode({ code: codeResponse.code })
    },
    onError: () => {
      alert('Login Failed')
    },
  })

  return (
    <Box>
      <Button
        colorScheme={'blackAlpha'}
        bgColor={'black'}
        size={'sm'}
        onClick={() => login()}
      >
        Login With Google
      </Button>
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
          {data && <Text>Logged In As : {data?.getTokenByCode}</Text>}
        </Box>
      )}
    </Box>
  )
}

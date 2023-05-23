import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Client, cacheExchange, fetchExchange, Provider } from 'urql'

const client = new Client({
  url: '/api/graphql',
  exchanges: [cacheExchange, fetchExchange],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <ChakraProvider>
        <Provider value={client}>
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    </GoogleOAuthProvider>
  )
}

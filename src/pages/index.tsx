import { Box, Container, Divider, Grid, Text } from '@chakra-ui/react'
import { GoogleLogin } from '@react-oauth/google'
import { graphql } from '@/lib/gql'
import { useQuery } from 'urql'

const HomePageQuery = graphql(/* GraphQL */ `
  query HomePage {
    greetings
  }
`)

export default function Home() {
  const [{ data, fetching }] = useQuery({
    query: HomePageQuery,
  })

  return (
    <Container as={Grid} gap={4} py={8}>
      <Text fontSize={'2xl'} fontWeight={'semibold'}>
        Google Identity Services Playground
      </Text>

      <Divider />

      <Grid gap={2}>
        <Text fontWeight={'semibold'} color={'gray.600'}>
          Query Result
        </Text>
        <Box bg={'gray.200'} py={2} px={3} mt={2} rounded={'md'}>
          <Text>{fetching ? 'loading...' : data?.greetings}</Text>
        </Box>
      </Grid>

      <Divider />

      <Grid gap={2}>
        <Text fontWeight={'semibold'} color={'gray.600'}>
          Sign In With Google
        </Text>
        <GoogleLogin
          onSuccess={() => {
            alert('Login Success')
          }}
          onError={() => {
            alert('Login Failed')
          }}
        />
      </Grid>
    </Container>
  )
}

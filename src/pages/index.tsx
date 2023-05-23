import { Container, Divider, Grid, Text } from '@chakra-ui/react'
import { GoogleLogin } from '@react-oauth/google'

export default function Home() {
  return (
    <Container as={Grid} gap={4} py={8}>
      <Text fontSize={'2xl'} fontWeight={'semibold'}>
        Google Identity Services Playground
      </Text>

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

import { Container, Divider, Grid, Text } from '@chakra-ui/react'
import { SignInWithGoogleFlow } from '@/components/SignInWithGoogleFlow'
import { OAuth2Flow } from '@/components/OAuth2Flow'

export default function Home() {
  return (
    <Container as={Grid} gap={4} py={8}>
      <Text fontSize={'2xl'} fontWeight={'semibold'}>
        Google Identity Services Playground
      </Text>

      <Divider />

      <Text fontWeight={'semibold'} color={'gray.600'}>
        Sign In With Google Flow
      </Text>
      <SignInWithGoogleFlow />

      <Divider />

      <Text fontWeight={'semibold'} color={'gray.600'}>
        OAuth2 Flow
      </Text>
      <OAuth2Flow />
    </Container>
  )
}

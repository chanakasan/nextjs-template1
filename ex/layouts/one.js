import { 
  Container,
  Center,
  Heading,
  Box,
} from '@chakra-ui/react'

export default () => (
  <Container bg='#333' h='100vh' maxW='100vw' margin='0' pt='60px'>
    <Center>
      <Box p='40px' bg='#444' color='#ddd' border='solid black' width='50vw'>
        <Heading align='center' mb='20px'>Example Form</Heading>
        <Center h='100px'>
          This is the Center
        </Center>
      </Box>
    </Center>
  </Container>
)

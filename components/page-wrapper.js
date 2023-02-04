import { 
  Container,
  Center,
  Heading,
  Box,
} from '@chakra-ui/react'

const PageWrapper = ({ children, useBox }) => (
  <Container bg='#333' h='100vh' maxW='100vw' margin='0' pt='60px'>
    <Center>
      {
        useBox ? (
          <Box p='40px' bg='#444' border='solid black' width='50vw'>
            {children}
          </Box>
        ) : children
      }
    </Center>
  </Container>
)

PageWrapper.defaultProps = {
  useBox: true
}

export default PageWrapper

import { 
  Container,
  Grid,
  GridItem,
  Center,
  Heading,
  Box,
  Flex,
} from '@chakra-ui/react'

const Header = () => (
  <Box>
    <Heading>Header</Heading>
  </Box>
)

const Footer = () => (
  <Box>
    <Heading>Footer</Heading>
  </Box>
)

const Main = () => (
  <Box p='40px'>
    <Heading>Example Layout #2</Heading>
  </Box>
)

const routes = Array.from({length: 5}, (_, i) => i+1)

const Nav = () => (
  <Flex direction="column" gap="10px" p='20px'>
    { routes.map(r => <a href="#">nav link #{r}</a>) }
  </Flex>
)

export default () => (
  <Container bg='#333' h='100vh' maxW='100vw' margin='0' p='0'>
    <Grid
      templateAreas={`"header header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows={'60px 1fr 60px'}
      gridTemplateColumns={'1fr 5fr'}
      h='100%'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl='2' bg='orange.300' area={'header'}>
        <Header />
      </GridItem>
      <GridItem pl='2' bg='pink.300' area={'nav'}>
        <Nav />
      </GridItem>
      <GridItem pl='2' bg='green.300' area={'main'}>
        <Main />
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  </Container>
)

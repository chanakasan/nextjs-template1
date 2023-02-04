import '@styles/globals.css'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NextJS Template1</title>
      </Head>

      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default Application

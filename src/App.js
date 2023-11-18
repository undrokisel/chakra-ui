import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Container,
  Heading,
  Divider,
} from '@chakra-ui/react';
import { Header } from './components/Header';

function App() {
  return (

    <ChakraProvider theme={theme}>
      <Header />
      <Container maxW="container.lg">
        <Box py={3}>
          <Heading as='' size='2xl' >Chakra UI Demo page</Heading>
          <Text variant='' fontSize={'44px'}>text</Text>
        </Box>
        <Divider/>
      </Container>
    </ChakraProvider>
  );
}

export default App;

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
import { CardList } from './components/CardList';
import { cards } from './data/cards';

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

      <CardList cards={cards}/>
    </ChakraProvider>
  );
}

export default App;

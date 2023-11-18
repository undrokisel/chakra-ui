import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Container,
  Heading,
  Divider,
  extendTheme
} from '@chakra-ui/react';
import { Header } from './components/Header';
import { CardList } from './components/CardList';
import { cards } from './data/cards';

function App() {
  const customTheme = extendTheme({
    colors: {
      brand: {
        100: "pink",
        300: "red",
        200: "orange",
        600: "orange",
        700: "brown",
      }
    },
    components: {
      Button: {
        brand: props => ({
          bg: props.colorMode === 'dark' ? 'brand.100' : 'brand.700',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.700' : 'brand.100',
          }
        })
      }
    }
  });
  return (

    <ChakraProvider theme={customTheme}>
      <Header />
      <Container maxW="container.lg">
        <Box py={3}>
          <Heading as='' size='2xl' >Chakra UI Demo page</Heading>
          <Text variant='' fontSize={'44px'}>text</Text>
        </Box>
        <Divider />
      </Container>

      <CardList cards={cards} />
    </ChakraProvider>
  );
}

export default App;

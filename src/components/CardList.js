import { Box, Button, Card, CardBody, CardHeader, Grid, Heading, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react"


export const CardList = (props) => {
    const { cards = [] } = props;
    return (
        <Box>
            <SimpleGrid columns={[1, 2, 3, 4, 5, 6]} spacing={[4, null, 6]}>
                {
                    cards.map(card => {
                        return (
                            <Stack key={card.title} m={2}
                                p={4}
                                _hover={{ shadow: 'lg' }}
                                spacing={2}>
                                <Heading>
                                    {card.title}
                                </Heading>
                                <Text>{card.body}</Text>
                                <Button as="a" variant="outline">Read more</Button>
                            </Stack>
                        )
                    })
                }
            </SimpleGrid>
        </Box>
    )
}
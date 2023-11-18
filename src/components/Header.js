import { Box, Container, Flex, Image, space, useColorMode } from "@chakra-ui/react";
import Logo from "../logo.svg";
import { ColorModeSwitcher } from "../ColorModeSwitcher";


export const Header = () => {
    const { colorMode } = useColorMode()
    return (
        <Box as="header" py={2}
            bg={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>
            <Container
                maxW="container.lg"
            >
                <Flex
                    alignItems="center"
                    justifyContent="space-between">
                    <Image src={Logo}
                        boxSize="50px"
                        objectFit="cover"

                        alt="logo" />
                    <ColorModeSwitcher justifySelf="flex-end" />
                </Flex>
            </Container>
        </Box>
    )
}

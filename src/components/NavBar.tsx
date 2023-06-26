import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
const NavBar = () => (
    <HStack>
        <Image src={logo} boxSize='60px'></Image>
    </HStack>
)

export default NavBar
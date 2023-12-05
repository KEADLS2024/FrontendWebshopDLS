import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/react.svg'

const NavBar = () => {
  return (
    <>
    <HStack bg={"red"} justifyContent="space-between" padding="10px">
        {/* Change this to something that makes more sense later */}
        <Image src={logo} boxSize="60px"></Image>
        <div>This is the NavBar</div>
    </HStack>
    </>
  )
}

export default NavBar
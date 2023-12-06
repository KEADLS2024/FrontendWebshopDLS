import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/react.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <HStack bg={"gray.900"} justifyContent="space-between" padding="10px">
        {/* Change this to something that makes more sense later */}
        <Link to={`/`}>
          <Image src={logo} boxSize="60px"></Image>
        </Link>
        <div>This is the NavBar</div>
    </HStack>
    </>
  )
}

export default NavBar
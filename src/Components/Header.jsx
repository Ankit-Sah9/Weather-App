import { HStack } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <HStack h={'100px'} bgColor="black" color={'white'} flexDir='row'p={'10'}>
    <Link to='/'>Home</Link>
    <Link to='/exchanges'>Exchanges</Link>
    <Link to='/coins'>Coins</Link>
    <Link to='/weather'>Weather</Link>
    </HStack>
  )
}

export default Header
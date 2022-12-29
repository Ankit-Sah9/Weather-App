import { Container, Spinner,VStack,Box } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <VStack justifyContent='center' height={'100vh'}>
    <Box transform='scale(3)'>
        <Spinner size={'xl'}></Spinner></Box>
    </VStack>
  )
}

export default Loader
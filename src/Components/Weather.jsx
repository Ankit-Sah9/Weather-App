import { Button, Card, CardBody, CardFooter, Container,Divider,Heading,HStack,Input,Spinner,Text ,Box} from '@chakra-ui/react'

import axios from 'axios'
import React, { useState } from 'react'
import Loader from './Loader'

const Weather = () => {
const [loader,setLoader]=useState(false)
const [userInput,setUserInput]=useState('')
const [info,setTemp]=useState('')

const input=(e)=>{
setUserInput(e.target.value)
}
const url=`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=1445ddd9793ffbc5b5a75a223b4d331f`

const search=async()=>{
    try {
        setLoader(true)
        const {data}=await axios.get(url) 
        setLoader(false)
        setTemp(data)
        
        
    } catch (error) {
        alert('Error while fetching info')
    }
  
}
  return (
    <Container display={'flex'} justifyContent='center' alignItems='center'  height='80vh'>
    
    <Card border={'2px solid black'} boxSize='400px' p={'20px'}>
        <Heading textAlign={'center'}>Weather App</Heading>
        <CardBody>
        <HStack>
        <Input placeholder='Enter the city name' onChange={input} value={userInput}></Input>
        <Button onClick={search}>Search</Button>
        </HStack>
        <Text textAlign={'center'}   fontSize={'50px'} borderRadius='5px' border={'3px solid black'}
        margin='50px'>{loader?<Spin/>:<>{info?Math.round(info.main.temp-273):''}°C</>}</Text>
        </CardBody>
        
        
        </Card>
    </Container>
  )
}
const Spin=()=>{
    return (
    
        <Spinner size={'xl'}></Spinner>
    )
}
export default Weather
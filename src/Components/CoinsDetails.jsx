import { Container,HStack ,VStack,Image, Box,Text, Badge, Stack,Stat, CardFooter, ButtonGroup, Button, CardBody, Card, Heading, Divider, RadioGroup, Radio, StatLabel, StatNumber, StatHelpText, StatArrow } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams,Link} from 'react-router-dom'
import Loader from './Loader'
const CoinsDetails = () => {
  const params=useParams()
  const [currency,setCurrency]=useState('inr')
  const [coin,setCoin]=useState()
  const [loader,setLoader]=useState(true)
const url=`https://api.coingecko.com/api/v3/coins/${params.id}`
useEffect(()=>{
  const fetchdata=async()=>{
    const {data}= await axios.get(url)
    setCoin(data)
    setLoader(false)
   
    
  }
  fetchdata();
},[currency])

  return (
    <>
    <Link to='/coins'><Button>Back</Button></Link>
    <Container maxW={'container.xl'} position='relative'>
      {loader?<Loader/>:<>
      
      <RadioGroup value={currency} position='absolute' 
      top={'10px'} right='5px' width={'250px'} onChange={setCurrency} textAlign='center'>
                <Radio value='inr' margin={'10px'}>Inr</Radio>
                <Radio value='usd' margin={'10px'}>Usd</Radio>
                <Radio value='eur' margin={'10px'}>Eur</Radio>
                </RadioGroup>
      <HStack justifyContent={'flex-start'}   >
     
        <Card maxW='sm'>
  <CardBody>
    <Image 
      src={coin.image.large}
      alt='error lading image'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
    <Text fontWeight={'bold'} textAlign='center' bgColor={'black'} color='white'>
        {coin.symbol}
      </Text>
      <Heading size='md'>{coin.name}</Heading>
      <Text color='blue.600' fontSize='2xl'>
       {currency=='inr'?'Rs.':currency=='usd'?'$':'€'} {coin.market_data.current_price[currency]}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter justifyContent={'center'}>
  <Badge transform={'scale(3)'} >#{coin.market_cap_rank}</Badge>
  </CardFooter>
</Card>
<Card w={'100%'} p="50px" border={'1px solid black'}>
<Heading textAlign={'center'}>Details</Heading>
<Box>
      <Stat >
      <HStack justifyContent={'space-evenly'}>
    <StatLabel>Max Supply</StatLabel>
    <StatNumber>{coin.market_data.max_supply==null?"Not aviable":coin.market_data.max_supply}</StatNumber></HStack>
      <HStack justifyContent={'space-evenly'}>
    <StatLabel>Total Supply</StatLabel>
    <StatNumber>{coin.market_data.total_supply==null?"Not aviable":coin.market_data.total_supply}</StatNumber></HStack>
      <HStack justifyContent={'space-evenly'}>
    <StatLabel>Circulating Supply</StatLabel>
    <StatNumber>{coin.market_data.circulating_supply==null?"Not aviable":coin.market_data.circulating_supply}</StatNumber></HStack>
    <HStack justifyContent={'center'}>
    <StatHelpText>
      <StatArrow type={coin.market_data.price_change_percentage_24h>0?'increase':'decrease'} />
      {coin.market_data.price_change_percentage_24h}%
    </StatHelpText>
    </HStack>
  </Stat></Box>
  </Card>
      </HStack>

      </>}
    </Container>
    </>
  )
}

export default CoinsDetails
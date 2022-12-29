import { Container, HStack ,Image,Radio,RadioGroup,Text, Tooltip} from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'

const Coins = () => {

    
    const [currency,setCurrency]=useState('inr')
    const [coins,setCoins]=useState([])
    const [loader,setLoader]=useState(true)
    useEffect(()=>{
        const fetchCoins=async()=>{
        try {
        const {data}=await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
        setCoins(data)
        setLoader(false)

        } catch (error) {
            alert('error while fetching exchanges')
            console.log(error)
        }
        
    }
    fetchCoins()
    }
    ,[currency])

  return (
    <Container maxW={'container.xl'} >
{loader?<Loader/>:<>
<Container>
<RadioGroup value={currency} onChange={setCurrency} textAlign='center'>
                <Radio value='inr' margin={'10px'}>Inr</Radio>
                <Radio value='usd' margin={'10px'}>Usd</Radio>
                <Radio value='eur' margin={'10px'}>Eur</Radio>
                </RadioGroup></Container>
<HStack flexWrap={'wrap'} justifyContent='space-evenly' width='100%' margin='50px'>
             
            {
                
                coins.map((i)=>{
                     return(<Link to={`/coins/${i.id}`} ><Container margin={'10px'} key={i.id} boxShadow={'md'} display='flex' 
                     justifyContent={'center'} flexDir='column'
                     alignItems='center' p={'20px'}
                      boxSize={'300px'} css={{'&:hover':{transform:'scale(1.1)'
                      }}}
                     >

                        <Tooltip label={i.name} aria-label='A tooltip'><Image src={i.image} objectFit='contain' boxSize={'100px'}></Image></Tooltip>
                        <Text fontWeight={'semibold'} m='5px'>{i.id}</Text>
                        <Text>{i.name}</Text>
                        <Text>{
                            currency=='inr'?'Rs.':currency=='usd'?'$':'€'
                        }{i.current_price}</Text>
                    </Container></Link>)
                    
                })
            }
        </HStack>
</>}</Container>
  )
}

export default Coins
import { Box, Container, HStack,Image,Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from './Loader'

const Exchanges = () => {
const [exchanges,setExchanges]=useState([])
const [loader,setLoader]=useState(true)
useEffect(()=>{
    const fetchData=async()=>{
        try {
        const {data}=await axios.get('https://api.coingecko.com/api/v3/exchanges')
        setExchanges(data)
        setLoader(false)

        } catch (error) {
            alert('error while fetching exchanges')
        }
        
    }
    fetchData()

}
,[])
  return (
    
    <Container maxW={'container.xl'} >
{loader?<Loader/>:<>
        <HStack flexWrap={'wrap'} justifyContent='space-evenly' width='100%' margin='50px'>
            {
                exchanges.map((i)=>{
                     return(<a href={i.url} target='blank'><Box key={i.id} boxShadow={'md'} display='flex' 
                     justifyContent={'center'} flexDir='column'
                     alignItems='center' p={'20px'}
                      boxSize={'200px'} css={{'&:hover':{transform:'scale(1.1)'
                      }}}
                     >

                        <Image src={i.image} objectFit='contain'></Image>
                        <Text fontWeight={'semibold'} m='5px'>{i.id}</Text>
                        <Text>{i.name}</Text>
                    </Box></a>)
                    
                })
            }
        </HStack>
        </>
}

    </Container>
  )
}

export default Exchanges
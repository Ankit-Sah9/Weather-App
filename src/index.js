import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import {ChakraProvider,theme} from '@chakra-ui/react'
ReactDom.render(
<ChakraProvider theme={theme}>
    <App/>
</ChakraProvider>
    ,document.getElementById('root')
)
import { Box,styled } from '@mui/material'
import React from 'react'
import {useContext,useState,useEffect} from 'react';
import {DataContext} from '../Context/DataProvider';


function Result() {
  const [src,setSrc] = useState('');
const {html,css,js} = useContext(DataContext)

  const srcCode =`
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>
  `
const Container = styled(Box)`
height:'40vh'
`
  useEffect(()=>{
   
    const timeout=setTimeout(() => {
      setSrc(srcCode)
    }, 1000);
    return () => clearTimeout(timeout)
  },[html,css,js])
  return (
    <Container>
      <iframe
        srcDoc = {src}
        titlle='Output'
        sandBox = 'allow-scripts'
        frameBorder={0}
        height='100%'
        width='100%'

      />
    </Container>
  )
}

export default Result

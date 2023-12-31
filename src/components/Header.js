import React from 'react'
import { AppBar, Toolbar,styled,Typography } from '@mui/material';

 const Container = styled(AppBar)`
    background: #060606;
      color: red;
      font-size : 19px;
      font-weight: bold;
      height:9vh;
`

function Header() {
  return (
    
    <Container position='static'>
    <Toolbar>
    <Typography variant="h6" style={{ fontFamily: 'Pacifico, sans-serif' }}>
        CodeMirrorHub
      </Typography>
      </Toolbar>
    </Container>
  )
}

export default Header

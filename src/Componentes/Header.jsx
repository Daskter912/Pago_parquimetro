import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../Pages/Home.css'

export default function Header() {
  return (
    <Box   className='header' >
    <AppBar color='transparent' position="absolute" sx={{ height: '100px', justifyContent:'center', alignItems:'center', }} >
      <Toolbar variant="dense">
        <Typography variant="h3" color="inherit" component="div">
          Parquimetro
        </Typography>
      </Toolbar>
    </AppBar>
    </Box>
  )
}

import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box   className='header' >
    <AppBar color='transparent' position="fixed" sx={{ height: '70px', justifyContent:'inherit', alignItems:'initial', }} >
      <Toolbar variant="dense">
        <Typography variant="h5" color="inherit" component="div">
          Cobro de Parquimetro
        </Typography>
      </Toolbar>
    </AppBar>
    </Box>
  )
}

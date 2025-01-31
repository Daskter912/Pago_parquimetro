import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



export default function Header() {
  return (
    <Box  sx={{ flexGrow: 1}}  >
    <AppBar color='default' position="absolute" sx={{ height: '100px', justifyContent:'center', alignItems:'center' }} >
      <Toolbar variant="dense">
        <Typography variant="h2" color="inherit" component="div">
          Cobro Parquimetro
        </Typography>
      </Toolbar>
    </AppBar>
    </Box>
  )
}

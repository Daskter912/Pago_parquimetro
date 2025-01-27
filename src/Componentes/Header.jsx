import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function Header() {
  return (
    <AppBar color='default' position="absolute" sx={{ height: '100px', justifyContent:'center', alignItems:'center' , borderRadius:'8px'}} >
      <Toolbar variant="dense">
        <Typography variant="h3" color="inherit" component="div">
          Cobro Parquimetro
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

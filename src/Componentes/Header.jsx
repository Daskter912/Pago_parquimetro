import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../Pages/Home.css'
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { AuthContex } from '../Contexs/UseAuth';
import { useContext } from 'react';


export default function Header() {

  const {setLoginMatrc, setLoginCont, loginCont, loginMatrc, IsAuth, Auth} = useContext(AuthContex);


  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };




  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box   sx={{flexGrow:1}} className='header' >
    <AppBar color='transparent'  sx={{ height: '90px', justifyContent:'inherit', alignItems:'initial', }} >
      <Toolbar variant="dense">
        <Typography variant="h5" color="inherit" component="div"  sx={{flexGrow:0.96}}>
          Cobro de Parquimetro
        </Typography>
              <IconButton
                fontSize="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle 
                fontSize="large"
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>{loginMatrc}</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
      </Toolbar>
    </AppBar>
    </Box>
  )
}

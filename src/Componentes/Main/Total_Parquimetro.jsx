import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import './main.css'
import { MainContex } from './MainProvider';
import { useContext } from 'react';





export default function Total_Parquimetro() {

    const {hora, sethora} = useContext(MainContex);

  return (
    <Container sx={{ p:2 ,backgroundColor:'white', borderRadius:'5px', width:"400px", boxShadow:3} } className='Total_parquimetro' >
    <Card >
        <Box sx={{ p: 2 }}>
            <Stack
            spacing={4}
            direction="row"
            sx={{ justifyContent: 'flex-start', alignItems: 'center' }}
            >
            <Typography gutterBottom variant="h7" component="div">
                Tiempo: {hora}
            </Typography>
            <Divider></Divider>
            <Typography gutterBottom variant="h7" component="div">
                $20 pesos x 1 hora
            </Typography>
            </Stack>
        </Box>
        <Box sx={{ p: 2 }}>
            <Stack
            spacing={4}
            direction="row"
            sx={{ justifyContent: 'flex-start', alignItems: 'center' }}
            >
            <Typography gutterBottom variant="h7" component="div">
                Costo total:
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
                $4.50
            </Typography>
            </Stack>
        </Box>
    </Card>
    </Container>
    
    
    
  )
}

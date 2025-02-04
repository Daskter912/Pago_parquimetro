import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import './main.css'
import { MainContex } from './MainProvider';
import { useContext } from 'react';





export default function Total_Parquimetro() {

    const {hora, sethora} = useContext(MainContex);

  return (
    <Box p={2} className="main__item">
    <Container sx={{ p:2 ,backgroundColor:'white', borderRadius:'5px', width:"400px", boxShadow:3, height:"190px" } } className='Total_parquimetro' >
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
            </Stack>
            </Box>
            <Box p={2} >
                <Typography gutterBottom variant="h7" component="div">
                Precio: $20 pesos x 1 hora
            </Typography>
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
    </Box>
  )
}

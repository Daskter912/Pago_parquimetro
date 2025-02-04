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

    const {hora, sethora, servicio, calcular} = useContext(MainContex);

    

  return (
    <Box sx={{boxShadow:3, borderRadius:3}} className="main__item   main__item--secundari">
    <Card sx={{boxShadow:0, borderRadius:3   }} className='card' >
       
            <Box p={2} >
                <Typography gutterBottom variant="subtitle2" component="div">
                Servicio: $20 pesos x 1 hora
            </Typography>
            </Box>
        <Box sx={{ p: 2 }}>
            <Stack
            spacing={4}
            direction="row"
            sx={{ justifyContent: 'flex-start', alignItems: 'center' }}
            >
            <Typography gutterBottom variant="subtitle2" component="div">
                Costo total: 
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
            {calcular}
            </Typography>
            </Stack>
        </Box>
    </Card>
    </Box>
  )
}

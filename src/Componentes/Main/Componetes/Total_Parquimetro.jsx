import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useContext } from 'react';
import CardActionArea from '@mui/material/CardActionArea';



export default function Total_Parquimetro() {


  return (
<Box sx={{boxShadow:3, borderRadius:3}} className="main__item   main__item--secundari">
  <Card sx={{boxShadow:0, borderRadius:3   }} className='card' >
    <CardActionArea>
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
              Calcular
              </Typography>
            </Stack>
        </Box>
    </CardActionArea>
  </Card>
</Box>
  );
};

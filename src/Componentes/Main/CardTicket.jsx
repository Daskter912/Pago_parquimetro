import React from 'react'
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useContext } from "react";
import { CreaTicketCtex } from '../../Contexs/UseCreaTicket';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';








export default function CardTicket() {
    const {Gethora, setGethora, CapturarHora} = useContext(CreaTicketCtex);
    console.log(Gethora.constructor.name)


  return (
    <Box  className='main__item__card'  >
        <Card sx={{boxShadow:3, borderRadius:3   }}  className=' main__item--cardTicket' >
            <CardActionArea>
                <CardContent>
                    <Typography  gutterBottom variant='h6' color='textPrimary' >
                    Ticket Generado
                    </Typography>

                    <Typography variant='body2' >
                    {Gethora}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Box>

    );
};

import React from 'react'
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useContext } from "react";
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { CreatTick } from '../../../Contexs/UseCreTicket';


export default function CardTicket() {

    const {Gethora, setGethora, CapturarHora} = useContext(CreatTick);
    console.log(Gethora.constructor.name)



  


const TickeCret =()=>{
    return(
    <Box  className='main__item__card'  >
        <Card sx={{boxShadow:3, borderRadius:3   }}  className='main-item main__item--cardTicket' >
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
}

const Bienvenida =()=>{

    return(
    <Box  className='main__item__card'  >
        <Card sx={{boxShadow:3, borderRadius:3   }}  className='main-item main__item--cardTicket' >
            <CardActionArea>
                <CardContent>
                    <Typography  gutterBottom variant='h6' color='textPrimary' >
                        Bienvenido al sistema
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Box>
    );
}


    return (
    <>
    {Gethora ? <TickeCret></TickeCret> : <Bienvenida></Bienvenida> }
    </>
    );
};

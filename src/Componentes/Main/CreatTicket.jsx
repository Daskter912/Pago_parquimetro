import React from "react"; 
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { CreaTicketCtex } from '../../Contexs/UseCreaTicket';
import { useContext } from "react";
import './main.css'
import { Box } from '@mui/material';





export default function CreatTicket() {

const {Gethora, setGethora, CapturarHora} = useContext(CreaTicketCtex);

console.log(Gethora);

return (
    <Box  className='main__item  main__item--creaticket' >
        <Paper elevation={4} square={false}  >
            <Button  variant="contained" onClick={CapturarHora} > GENERAR TICKET</Button>
        </Paper>
    </Box>
    
    );
}

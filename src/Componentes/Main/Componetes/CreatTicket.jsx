import React from "react"; 
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useContext } from "react";
import { Box } from '@mui/material';
import { CreatTick } from "../../../Contexs/UseCreTicket";





export default function CreatTicket() {

const {Gethora, setGethora, CapturarHora} = useContext(CreatTick);

console.log(Gethora);

return (
    <Box  className='main-item  main__item--creaticket' >
        <Paper elevation={4} square={false}  >
            <Button  variant="contained" onClick={CapturarHora} > GENERAR TICKET</Button>
        </Paper>
    </Box>
    
    );
}

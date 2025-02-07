import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Container, Divider } from '@mui/material';
import Button from '@mui/material/Button';
import './main.css'
import { MainContex } from '../../Contexs/MainProvider';
import {CreaTicketCtex} from '../../Contexs/UseCreaTicket';




export default function Content_Input() {
   
  const {Gethora, setGethora} = useContext(CreaTicketCtex);
  const {hora, sethora, servicio, setServicio, setaccion, acion, calcular, setcalcular} = useContext(MainContex);

  const capturarHora = (evento) => {
    const valor = (evento.target.value);
    const valorNumerico = parseInt(valor, 10);
    sethora(valorNumerico);
    setcalcular('');

  };

  const calCosto = () =>{
    console.log(hora);
    const calculo = hora * 20;
    setcalcular(calculo);
    setaccion(true)
  }

   console.log(hora);

    console.log(calcular);
  return (
    <Box  p={2} className="main__item  main__item--primari ">
    <Container  sx={{p:2 ,display:'flex',  flexWrap:'nowrap', flexDirection:'column', backgroundColor:'white', borderRadius:'5px', boxShadow:3 } } className='Content_input' >
        <TextField
        type='number'
          label="Tiempo de estancia"
          id="outlined-start-adornment"
          value={hora}
          onChange={capturarHora} 
          sx={{ m: 1, width: '25ch' }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start"  >Hr</InputAdornment>,
            },
          }}
        />
        <Divider></Divider>
      <Button variant="contained"  onClick={calCosto} >calcular</Button>
    </Container>    
    </Box>
  )
}

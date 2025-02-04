import React, { useCallback, useContext } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Container, Divider } from '@mui/material';
import Button from '@mui/material/Button';
import './main.css'
import { MainContex } from './MainProvider';




export default function Content_Input() {

  const {hora, sethora, servicio, setServicio, setaccion, acion, calcular, setcalcular} = useContext(MainContex);


  const capturarHora = (evento) => {
    const valor = (evento.target.value);
    const valorNumerico = parseInt(valor, 10);
    sethora(valorNumerico);
    console.log(hora.constructor.name);
    setcalcular('');

  };

  const calCosto = () =>{
    const calculo = hora * 20;
    setcalcular(calculo);
    console.log(calcular);
    setaccion(true);

  }

  



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

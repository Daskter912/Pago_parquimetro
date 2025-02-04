import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './main.css'
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { MainContex } from './MainProvider';
import { useContext } from 'react';


export default function Tabla() {

  const {hora, sethora, servicio, setServicio, setaccion, acion, calcular, setcalcular,errorMessage, setErrorMessage} = useContext(MainContex);

  const horaEntrada = "8:30 pm"
  const horaSalida = "9:00 pm"
  const costoTimepo = "$20"


  const dateTable = {
    costo:calcular,
    tiempo:hora, 
    precio:costoTimepo,
    entrada:horaEntrada,
    salida:horaSalida,

};


  const agregarElemento = () => {
    setServicio((prevServicio) => [...prevServicio, dateTable]);
    sethora(''); 
    setaccion(false);
  };


  const filtro = ()=>{
    if(!calcular == 0 || null){
      agregarElemento();
    }
    sethora('');
    setaccion(false);
  }


  useEffect(() => {
    if(acion === true){
      filtro();
      console.log('hola funciona');
    }
  }, [acion]);

 console.log(calcular)


  return (

    <Box p={2}  className="main__item main__item--active" >
    <TableContainer component={Paper} sx={{borderRadius:'5px',boxShadow:3  }}>
      <Table  padding='normal' size='medium' aria-label="simple table"   className='Tabla'>
        <TableHead>
          <TableRow>
            <TableCell align="right">Total de horas</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Precio total</TableCell>
            <TableCell align="right">Entrada</TableCell>
            <TableCell align="right">Salida</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {servicio.map((item, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{item.tiempo} hr</TableCell>
              <TableCell align="right">{item.precio}</TableCell>
              <TableCell align="right">${item.costo}</TableCell>
              <TableCell align="right">{item.entrada}</TableCell>
              <TableCell align="right">{item.salida}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Box>
  );
}
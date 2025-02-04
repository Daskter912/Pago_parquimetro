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




function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  





export default function Tabla() {

  const {hora, sethora, servicio, setServicio, setaccion, acion, calcular, setcalcular} = useContext(MainContex);

  const agregarElemento = () => {
    setServicio((prevServicio) => [...prevServicio, calcular]);
    sethora(''); // Limpiar el input después de agregar el elemento
    setaccion(false)
  };


  useEffect(() => {
    if(acion === true){
   agregarElemento();
   console.log(calcular);
   console.log(servicio);
    }
  }, [acion]);

  console.log(servicio)



  return (

    <Box p={2}  className="main__item main__item--active" >
    <TableContainer component={Paper} sx={{borderRadius:'5px',boxShadow:3  }}>
      <Table  padding='normal' sx={{ maxWidth:"650px"}} aria-label="simple table"   className='Tabla'>
        <TableHead>
          <TableRow>
            <TableCell>Hora de entrada</TableCell>
            <TableCell align="right">Hora de salida</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Costo por hora</TableCell>
            <TableCell align="right">Precio total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Box>
  );
}
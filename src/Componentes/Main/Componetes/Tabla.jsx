import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import React, { useState } from 'react';
import { useContext } from 'react';
import { CreatTick } from '../../../Contexs/UseCreTicket';
import { useEffect } from 'react';



export default function Tabla() {

  const {Gethora, setGethora, CapturarHora, accion , setAccion} = useContext(CreatTick);


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [addHora, setAddhora] = useState([]);

  const precio = 20;
  const horaSalida = "11:23:21";
  const diaSalida ="25 de febrero 2025";
  const totalHoras = 23;
  


  const [diaSemana, diaMes, hora] = Gethora.split(",").map(item => item.trim());

    const dateTable = {
    tiempo:hora,
    entradaDia: diaMes,
    precio:precio,
    tiempoSalida:horaSalida,
    salidaDia:diaSalida,
    totalHora:totalHoras
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

const AgregarElemento = () => {
  setAddhora((prevGethora) => [...prevGethora,dateTable ]);
};


useEffect(() => {
  if( accion === true){
        AgregarElemento();
        setAccion(false);
  }
  }, [accion]);

  console.log(addHora);

  return (
    <Paper sx={{  overflow: 'hidden' }} elevation={3}  className='main-item  main__item--active' >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
            <TableCell>Hora de entrada</TableCell>
            <TableCell align="left">Dia y año</TableCell>
            <TableCell align="right">Hora de salida</TableCell>
            <TableCell align="right">Dia y año salida</TableCell>
            <TableCell align="right">Total de horas</TableCell>
            <TableCell align="right">Costo total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {addHora.map((addHoras) => (
            <TableRow
              key={addHoras.name}
              hover role="checkbox" tabIndex={-1}
            >
              <TableCell component="th" scope="row">
                {addHoras.tiempo}
              </TableCell>
              <TableCell align="right">{addHoras.entradaDia}</TableCell>
              <TableCell align="right">{addHoras.tiempoSalida}</TableCell>
              <TableCell align="right">{addHoras.salidaDia}</TableCell>
              <TableCell align="right">{addHoras.totalHora}</TableCell>
              <TableCell align="right">${addHoras.precio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={addHora.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
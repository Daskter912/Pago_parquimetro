import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import React from 'react';

// const {hora, sethora, servicio, setServicio, setaccion, acion, calcular, setcalcular,errorMessage, setErrorMessage} = useContext(MainContex);
// const horaEntrada = "8:30 pm"
// const horaSalida = "9:00 pm"
// const costoTimepo = "$20"
// const dateTable = {
//   costo:calcular,
//   tiempo:hora, 
//   precio:costoTimepo,
//   entrada:horaEntrada,
//   salida:horaSalida,
// };
// const agregarElemento = () => {
//   setServicio((prevServicio) => [...prevServicio, dateTable]);
//   sethora(''); 
//   setaccion(false);
// };

// const filtro = ()=>{
//   if(!calcular == 0 || null){
//     agregarElemento();
//   }
//   sethora('');
//   setaccion(false);
// }
// useEffect(() => {
//   if(acion === true){
//     filtro();
//     console.log('hola funciona');
//   }
// }, [acion]);
// console.log(calcular)



























































const columns = [
  { id: 'Hora de entrada', 
    label: 'Hora de entrada', 
    minWidth: 150 },
  { id: 'Dia', 
    label: 'Dia', 
    minWidth: 60 },
  {
    id: 'Hora salida',
    label: 'Hora salida',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  { id: 'Dia de salida', 
    label: 'Dia de salida', 
    minWidth: 150 },
  {
    id: 'Total de horas',
    label: 'Total de horas',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Costo total',
    label: 'Costo total',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function Tabla() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{  overflow: 'hidden' }} elevation={3}  className='main-item  main__item--active' >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
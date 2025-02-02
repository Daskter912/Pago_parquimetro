import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Container, Divider } from '@mui/material';
import Button from '@mui/material/Button';
import './main.css'




export default function Content_Input() {
  return (
    <Container  sx={{p:2 ,display:'flex',  flexWrap:'nowrap', flexDirection:'column', backgroundColor:'white', borderRadius:'5px', width:"350px", height:"150px", boxShadow:3 } } className='Content_input' >
        <TextField
          label="Tiempo de estancia"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">Hr</InputAdornment>,
            },
          }}
        />
        <Divider></Divider>
      <Button variant="contained">calcular</Button>
        

    </Container>
    
  )
}

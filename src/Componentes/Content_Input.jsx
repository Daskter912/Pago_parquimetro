import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import { Container, Divider } from '@mui/material';
import Button from '@mui/material/Button';




export default function Content_Input() {
  return (
    <Container maxWidth="lg" sx={{p:2 ,display:'flex',  flexWrap:'nowrap', flexDirection:'column', backgroundColor:'white', borderRadius:'5px' } } >
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
      <Button variant="contained">Enviar</Button>
        

    </Container>
    
  )
}

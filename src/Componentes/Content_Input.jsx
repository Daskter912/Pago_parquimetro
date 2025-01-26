import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';




export default function Content_Input() {
  return (
    <Box>
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

    </Box>
    
  )
}

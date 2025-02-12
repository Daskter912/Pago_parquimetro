import React from 'react'
import { Container } from '@mui/material';
import '../Main/main.css'


const Main = ({children}) => {
    return (
    <Container maxWidth='100vh' className='main-content'>
        {children}
    </Container>
    );
};

export{Main};

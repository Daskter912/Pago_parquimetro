import React from 'react'
import './Main/main.css'
import { Container } from '@mui/material';


const Main = ({children}) => {
    return (
    <Container maxWidth='100vh' className='main-content'>
        {children}
    </Container>
    );
};

export{Main};

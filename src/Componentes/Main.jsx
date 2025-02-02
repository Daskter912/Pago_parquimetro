import React from 'react'
import './Main/main.css'


const Main = ({children}) => {
    return (
    <main className='main-content' >
        {children}
    </main>
    );
};

export{Main};

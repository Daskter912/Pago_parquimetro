import React, { createContext } from 'react'
const MainContex = createContext();


const MainProvider = ({children}) => {
    return (
    <MainContex.Provider>
        {children}
    </MainContex.Provider>
    
    );
};

export{MainContex, MainProvider};
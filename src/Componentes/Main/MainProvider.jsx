import React, { createContext, useState } from 'react'

const MainContex = createContext();


const MainProvider = ({children}) => {

    const [hora , sethora] = useState();
    return (
    <MainContex.Provider>
        {children}
    </MainContex.Provider>
    
    );
};

export{MainContex, MainProvider};
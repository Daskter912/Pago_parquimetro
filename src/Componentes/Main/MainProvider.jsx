import React, { createContext, useState } from 'react'

const MainContex = createContext();


const MainProvider = ({children}) => {

    //captura la hora total
    const [hora , sethora] = useState();


    const [acion , setaccion] = useState(0);
    const [calcular, setcalcular] =useState();
    const [servicio, setServicio] =useState([]);

    return (
    <MainContex.Provider  value={{ hora, sethora, servicio, setServicio, setaccion, acion,calcular, setcalcular}} >
        {children}
    </MainContex.Provider>
    
    );
};

export{MainContex, MainProvider};
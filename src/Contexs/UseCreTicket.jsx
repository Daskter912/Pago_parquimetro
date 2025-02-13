import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

const CreatTick = createContext();



const UseCreTicket = ({children}) => {

    const [Gethora , setGethora] = useState('');
    const [accion , setAccion] = useState();



        // Función para actualizar la hora
    function CapturarHora() {
    const opciones = { 
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
            hour: '2-digit', minute: '2-digit', second: '2-digit', 
            timeZone: 'America/Mexico_City'
            };
    
    const fechaHora = new Intl.DateTimeFormat('es-MX', opciones).format(new Date());
    setGethora(fechaHora);
    setAccion(true);
    };

    console.log(Gethora.constructor.name);
    
  return (
    <CreatTick.Provider  value={{Gethora, setGethora, CapturarHora, accion , setAccion}} >
        {children}
    </CreatTick.Provider>
    
  )
}
export{UseCreTicket, CreatTick};

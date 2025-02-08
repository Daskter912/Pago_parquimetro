import React, { createContext, useState } from 'react'

const CreaTicketCtex = createContext();

const  UseCreaTicket = ( {children}) => {


    const [Gethora , setGethora] = useState('');

    // Función para actualizar la hora
    function CapturarHora() {
    const opciones = { 
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
            hour: '2-digit', minute: '2-digit', second: '2-digit', 
            timeZone: 'America/Mexico_City'
            };
    
    const fechaHora = new Intl.DateTimeFormat('es-MX', opciones).format(new Date());
    setGethora(fechaHora);
    };


    return (
        <CreaTicketCtex.Provider value={{Gethora, setGethora, CapturarHora}}>
            {children}
        </CreaTicketCtex.Provider>
    );
};

export{CreaTicketCtex, UseCreaTicket};


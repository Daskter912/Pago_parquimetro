import React, {  createContext, useState } from "react";
import { Children } from "react";



const useCreaTicketContex = createContext();

const useCreateTicket =({children}) =>{
    const [hora, setHora] = useState();


    useEffect(() => {
          // Función para actualizar la hora
            function actualizarHora() {
            const opciones = { 
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
                hour: '2-digit', minute: '2-digit', second: '2-digit', 
                timeZone: 'America/Mexico_City'
            };
    
            const fechaHora = new Intl.DateTimeFormat('es-MX', opciones).format(new Date());
            setHora(fechaHora);
            }
    
           // Llamar a la función inmediatamente
            actualizarHora();
    
           // Actualizar cada segundo
            const intervalo = setInterval(actualizarHora, 1000);
    
          // Limpiar el intervalo al desmontar el componente
            return () => clearInterval(intervalo);
        }, []);



}
import React from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';


export default function CardFecha() {

    const [horaPuebla, setHoraPuebla] = useState("");

    useEffect(() => {
      // Función para actualizar la hora
        function actualizarHora() {
        const opciones = { 
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
            hour: '2-digit', minute: '2-digit', second: '2-digit', 
            timeZone: 'America/Mexico_City'
        };

        const fechaHora = new Intl.DateTimeFormat('es-MX', opciones).format(new Date());
        setHoraPuebla(fechaHora);
        }

       // Llamar a la función inmediatamente
        actualizarHora();

       // Actualizar cada segundo
        const intervalo = setInterval(actualizarHora, 1000);

      // Limpiar el intervalo al desmontar el componente
        return () => clearInterval(intervalo);
    }, []);

    return (
        <Paper  elevation={3} square={false} className='CardFecha' >
            <Typography  color='textPrimary'>{horaPuebla}</Typography>
        </Paper>
    )
}

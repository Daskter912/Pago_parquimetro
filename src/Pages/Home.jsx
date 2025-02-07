import React from 'react'
import Header from '../Componentes/Header'
import Total_Parquimetro from '../Componentes/Main/Total_Parquimetro'
import { Main } from '../Componentes/Main'
import Content_Input from '../Componentes/Main/Content_Input'
import Tabla from '../Componentes/Main/Tabla'
import './Home.css'
import { MainProvider } from '../Contexs/MainProvider'
import Fecha from '../Componentes/Main/Fecha'
import { useCreaTicket } from '../Contexs/useCreaTicket'

export default function Home() {
  return (
    
<div className='home-container'>
  <Header></Header>
<useCreaTicket>
    <MainProvider>
      
        <Main>
          <Fecha></Fecha>
          <Content_Input ></Content_Input>
          <Total_Parquimetro  > </Total_Parquimetro>
          <Tabla></Tabla>
        </Main>
   

      </MainProvider>
    </useCreaTicket>
</div>
  )
}
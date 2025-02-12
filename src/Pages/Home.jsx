import React from 'react'
import Header from '../Componentes/Header'
import Total_Parquimetro from '../Componentes/Main/Total_Parquimetro'
import { Main } from '../Componentes/Main'
import Content_Input from '../Componentes/Main/Content_Input'
import './Home.css'
import { MainProvider } from '../Contexs/MainProvider'
import CardFecha from '../Componentes/Main/CardFecha'
import { UseCreaTicket } from '../Contexs/UseCreaTicket'
import CreatTicket from '../Componentes/Main/CreatTicket'
import CardTicket from '../Componentes/Main/CardTicket'
import Tabla from '../Componentes/Main/Tabla'


export default function Home() {
  return (
    
<div className='home-container'>
  <Header></Header>
  <UseCreaTicket>
      <MainProvider>   
        <Main>
          <CardFecha></CardFecha>
          <CardTicket></CardTicket>
          <CreatTicket></CreatTicket>
          <Total_Parquimetro  > </Total_Parquimetro>
          <Tabla></Tabla>
        </Main>
      </MainProvider>
    </UseCreaTicket>
</div>
  )
}
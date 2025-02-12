import React from 'react'
import Header from '../Componentes/Header'
import Total_Parquimetro from '../Componentes/Main/Componetes/Total_Parquimetro'
import { Main } from '../Componentes/Main/Main'
import './Home.css'
import { MainProvider } from '../Contexs/MainProvider'
import CardFecha from '../Componentes/Main/Componetes/CardFecha'
import CreatTicket from '../Componentes/Main/Componetes/CardTicket'
import CardTicket from '../Componentes/Main/Componetes/CreatTicket'
import Tabla from '../Componentes/Main/Componetes/Tabla'
import { UseCreTicket } from '../Contexs/UseCreTicket'


export default function Home() {
  return (
    
<div className='home-container'>
  <Header></Header>
      <UseCreTicket>
          <MainProvider>   
            <Main>
              <CardFecha></CardFecha>
              <CardTicket></CardTicket>
              <CreatTicket></CreatTicket>
              <Total_Parquimetro  > </Total_Parquimetro>
              <Tabla></Tabla>
            </Main>
          </MainProvider>
      </UseCreTicket>
</div>
  )
}
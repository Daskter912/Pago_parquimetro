import { createContext } from 'react'
import './Home.css'
import React from 'react'
import Header from '../Componentes/Header'
import { MainProvider } from '../Componentes/Main/MainProvider'
import Total_Parquimetro from '../Componentes/Main/Total_Parquimetro'
import { Main } from '../Componentes/Main/Main'
import Content_Input from '../Componentes/Main/Content_Input'
import Tabla from '../Componentes/Main/Tabla'

export default function Home() {
  return (
    <>
    <Header></Header>
    <MainProvider>
      <Main>
        <Content_Input></Content_Input>
        <Total_Parquimetro> </Total_Parquimetro>
        <Tabla></Tabla>
      </Main>

     
    </MainProvider>
    
    </>
  )
}

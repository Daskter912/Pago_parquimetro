import { useState } from 'react'
import {Home} from './Pages/Home'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './Componentes/Header';
import Content_Input from './Componentes/Content_Input';
import Total_Parquimetro from './Componentes/Total_Parquimetro';
import Tabla from './Componentes/Tabla';

function App() {

  return (
    <Home>
      <Header></Header>
      <Content_Input></Content_Input>
      <Total_Parquimetro></Total_Parquimetro>
      <Tabla></Tabla>
    </Home>
  )
}

export default App

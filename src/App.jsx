import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from './Pages/Home';
import Login  from './Pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Login/>} ></Route>
        <Route path='/home'element={<Home/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

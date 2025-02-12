import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from './Pages/Home';
import Login  from './Pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UseAuth } from './Contexs/UseAuth';
import { useContext } from 'react';
import { AuthContex } from './Contexs/UseAuth';
import ProtectedRoute from './Pages/ProtectedRoute';



function App() {



  return (
    <BrowserRouter>
      <Routes>
            <Route path='/login'element={<Login/>} ></Route> 

            <Route 
            path='/home'
            element={<ProtectedRoute> <Home/> </ProtectedRoute>} ></Route>

            <Route path='*' element={<Login/>}  >  </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App

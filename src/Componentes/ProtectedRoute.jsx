import React from 'react'
import { Navigate, useLocation  } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContex } from '../Contexs/UseAuth'


const ProtectedRoute = ({children}) =>{
    const {IsAuth} = useContext(AuthContex);
    const location = useLocation();


  if (!IsAuth) {
    return <Navigate to="/login" />;
  }

  // Si el usuario ya está autenticado y está en /login, lo redirige a /home
  if (IsAuth && location.pathname === "/login") {
    return <Navigate to="/home" />;
  }



  return children;
};

export default ProtectedRoute;

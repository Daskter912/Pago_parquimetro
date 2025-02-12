import React, { createContext, useState } from "react";
import { useEffect } from "react";


const AuthContex = createContext();


const UseAuth = ({children}) => {

    const matricula = ['vane', 'isa'];
    const contraseña = ['1234', '1235'];

    const [loginMatrc, setLoginMatrc ] = useState();
    const [loginCont, setLoginCont ] = useState();
    const [validMatr, setvalidMatr ] = useState();
    const [validCont, setvalidCont] = useState();
    const [IsAuth, setIsAuth] = useState();

    const Auth =() =>{
        const vmatricula = matricula.includes(loginMatrc);
            setvalidMatr(vmatricula);
        const  vcontraseña = contraseña.includes(loginCont);
            setvalidCont(vcontraseña);
    }

useEffect(() => {
    if (!validCont || !validMatr) {
        setIsAuth(false);
    } else {
        setIsAuth(true);
    }
}, [validCont, validMatr])

return (
    <AuthContex.Provider   value={ {loginCont, setLoginCont, loginMatrc, setLoginMatrc, Auth, IsAuth, setIsAuth}}>
        {children}
    </AuthContex.Provider>
    )
}
export{UseAuth, AuthContex};
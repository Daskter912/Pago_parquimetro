import { createContext } from 'react'
import './Home.css'

const HomeContext = createContext();

const Home = ({children}) =>{
  return (
    <HomeContext.Provider>
      {children}
    </HomeContext.Provider>
  );
};
export{Home};

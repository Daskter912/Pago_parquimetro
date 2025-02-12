import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { UseAuth } from './Contexs/UseAuth'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseAuth>
        <App />
    </UseAuth>
  </StrictMode>,
)

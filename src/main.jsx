import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from "./Components/Header.jsx"
import Application from "./Components/Application.jsx"
import Say from "./Components/Say.jsx"
import Classes from "./Components/Classes.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
<div className="h-24 bg-gradient-to-b from-blue-500 via-blue-300 to-[#eef3f8]"></div> 
   <Header />
    <Application/>
    <div className="h-24 bg-gradient-to-b from-[#f5f7fa] via-[#f2edd7] to-[#f8f1d8]"></div>
    <Say />
<div className="h-10 bg-gradient-to-b from-[#f8f1d8] to-[#f5f7fa]"></div>
    <Classes/>
  </StrictMode>,
)

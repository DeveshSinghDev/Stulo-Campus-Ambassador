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
    <Header />
    <Application/>
    <Say />
    <Classes/>
  </StrictMode>,
)

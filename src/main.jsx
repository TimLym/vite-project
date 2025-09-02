import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import './css/App0805-1.css'
// import App from './App.jsx'
import "./assets/all.scss"
// import Weather from './pages/App0813-weather.jsx'
import App from "./pages/App0902-useContext.jsx"
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // StirvtMode 嚴謹模式
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)

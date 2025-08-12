import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import './css/App0805-1.css'
// import App from './App.jsx'
import Weather from './pages/App0812-weather.jsx'

createRoot(document.getElementById('root')).render(
  // StirvtMode 嚴謹模式
  <StrictMode>
    <Weather />
  </StrictMode>,
)

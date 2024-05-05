import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CounterProvider } from '../Context/Countercontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CounterProvider>
  <App />
 
  </CounterProvider>

 
  
)

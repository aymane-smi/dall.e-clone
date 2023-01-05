import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
document.body.classList.add("bg-[#fafafc]");
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

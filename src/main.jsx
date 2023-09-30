import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Api from './Context Api/Api.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Api>
      <App />
    </Api>
  </React.StrictMode>,
)

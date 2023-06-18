import React from 'react'
import ReactDOM from 'react-dom/client'
import  GlobalStyle  from './style/global'
import {SignIn} from './Pages/SignIn'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <SignIn/>
  </React.StrictMode>,
)

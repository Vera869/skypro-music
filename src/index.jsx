import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { GlobalStyle } from './GlobalStyled.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <GlobalStyle />
    <React.StrictMode>
      <BrowserRouter>
        <div className="App">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  </>,
)

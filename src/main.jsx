import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './index.css'
import MainRouter from './routes/MainRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={MainRouter} />
    </div>
  </React.StrictMode>,
)

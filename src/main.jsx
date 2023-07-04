import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './routes/Home.jsx'
import Products from './routes/Products.jsx'
import ProductsDetails from './routes/ProductsDetails.jsx'
import About from './routes/About.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Search from './routes/Search.jsx'

const router = createBrowserRouter ([
  {
    path:'/',
    element:<App />,
    errorElement:<ErrorPage />,
    children: [
      {
        path:'/',
        element:<Home />
      },
      {
        path:'products',
        element:<Products />
      },
      {
        path:'products/:id/ProductsDetails',
        element:<ProductsDetails />
      },
      {
        path:'about',
        element:<About />
      },
      {
        path:'search',
        element:<Search />
      }   
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

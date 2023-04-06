import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cardProductsLoader from './components/loders/cardProductsLoders';
import CheckOut from './components/CheckOut/CheckOut';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
        path:'/',
        element: <Shop/>
      },
      {
        path:'orders',
        element: <Orders/>,
        loader: cardProductsLoader
      },
      {
        path:'inventory',
        element: <Inventory/>
      },
      {
        path:'login',
        element: <Login/>
      },
      {
        path:'checkout',
        element: <CheckOut/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

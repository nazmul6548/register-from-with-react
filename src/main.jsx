import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Root } from './components/Root';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Register from './components/Register';
import { Heroregister } from './Pages/Heroregister';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/heroregister",
        element:<Heroregister></Heroregister>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

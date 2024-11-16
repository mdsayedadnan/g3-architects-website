import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layouts/Layout';
import Pages from './Components/Pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'',
        element: <Navigate to='/category/01'></Navigate>,
      },
      {
        path:'/category/:id',
        element:<Pages></Pages>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)

        
      }
    ]
  },
  {
      path:'/news',
      element:<h1> News Layout</h1>
  },
  {
      path:'auth',
      element:<h1> Login</h1>
  },
  {
      path:'*',
      element:<h1>error</h1>
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)

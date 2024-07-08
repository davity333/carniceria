import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReservarMesas from './Pages/ReservarMesas.jsx'
import AddProduct from './Pages/AddProduct.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/reservarMesas",
    element: <ReservarMesas></ReservarMesas>
  },
  {
    path: "/addProduct",
    element: <AddProduct></AddProduct>
  },

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
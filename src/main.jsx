import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReservarMesas from './Pages/ReservarMesas.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EjemploFechaHora from './Pages/EjemploFechaHora.jsx'

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
    path: "/ej",
    element: <EjemploFechaHora></EjemploFechaHora>
  }

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
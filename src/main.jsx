import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import './index.css';
import CarritoCompras from './Pages/CarritoCompras';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/carrito',
    element: <CarritoCompras/>,
  },
  {
    path: '/h',
    element: <div>Hola mundo</div>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

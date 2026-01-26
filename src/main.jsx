import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './routes/Routes.jsx';
import { RouterProvider } from "react-router/dom";

import './index.css'
import './App.css'
import AuthProvider from './Context/AuthProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>  <RouterProvider router={router} />,</AuthProvider>
  </StrictMode>,
)

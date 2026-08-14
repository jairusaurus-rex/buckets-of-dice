import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './index.css'
import MainRouter from './routers/MainRouter.tsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={MainRouter} />
  </StrictMode>,
)

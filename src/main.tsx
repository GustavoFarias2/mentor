import React from 'react'

import { createRoot } from 'react-dom/client'

import './index.css'

import Login from './presentation/pages/Login'

const rootComponent = document.getElementById('root') as HTMLElement

createRoot(rootComponent).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
)

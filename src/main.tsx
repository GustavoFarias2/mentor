import React from 'react'

import { createRoot } from 'react-dom/client'

import './index.css'

import Router from './services/routes'

const rootComponent = document.getElementById('root') as HTMLElement

createRoot(rootComponent).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)

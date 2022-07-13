import React from 'react'

import { createRoot } from 'react-dom/client'

import './index.css'

const rootComponent = document.getElementById('root') as HTMLElement

createRoot(rootComponent).render(
  <React.StrictMode>
    <div className="flex h-full w-full items-center justify-center">
      <span>mentor</span>
    </div>
  </React.StrictMode>
)

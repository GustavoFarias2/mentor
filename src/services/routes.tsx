import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ROUTES } from './constants/routes'
import Login from '@/presentation/pages/Login'
import Main from '@/presentation/pages/Main'

const Router = () => {
  return (
    <div className="h-full w-full bg-gray-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path={ROUTES.MAIN} element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router

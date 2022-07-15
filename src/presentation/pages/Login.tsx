import { useNavigate } from 'react-router-dom'

import api from '@/services/api'
import { ROUTES } from '@/services/constants/routes'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      await api.post('/login', {
        email: 'a@b.com',
        password: '123'
      })

      navigate(ROUTES.MAIN)
    } catch (e: any) {
      console.log(e.response.data.message)
    }
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex h-full w-full flex-col justify-between bg-white px-8 py-40 shadow-lg md:h-auto md:w-[480px] md:rounded-md md:py-8 md:px-12">
        <div className="mb-12 flex flex-col">
          <span className="text-2xl text-gray-800">Bem vindo ao Mentor</span>

          <span className="text-gray-500">
            para começar sua jornada primeiro faça login
          </span>
        </div>

        <div className="mb-8 flex flex-col">
          <input
            className="mb-4 rounded border-[1px] bg-white px-3 py-2 text-gray-600 focus-visible:outline-none"
            placeholder="Email"
          />

          <input
            className="rounded border-[1px] bg-white px-3 py-2 text-gray-600 focus-visible:outline-none"
            placeholder="Senha"
          />
        </div>

        <button
          onClick={handleLogin}
          className="flex w-[140px] items-center justify-center self-end rounded-md border-[1px] border-gray-200 py-2 text-lg font-normal text-gray-500"
        >
          Logar
        </button>
      </div>
    </div>
  )
}

export default Login

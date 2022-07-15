import { useEffect, useState } from 'react'

import { UserOutlined } from '@ant-design/icons'

import ContactsCard from '../components/ContactsCard/ContactsCard'
import Header from '../components/Header'
import Links from '../components/Links'
import Onboarding from '../components/Onboarding/Onboarding'
import OnboardingCards from '../components/OnboardingCards/OnboardingCards'
import UserCard from '../components/UserCard'
import { IUser } from '@/domain/IUser'
import api from '@/services/api'
import useOuterClick from '@/services/hooks/useOuterClick'

const Main = () => {
  const innerRef = useOuterClick(() => showMenu && handleToggleMenu())

  const [user, setUser] = useState<IUser>()
  const [showMenu, setShowMenu] = useState(false)
  const [componentsInCard, setComponentsInCard] = useState(false)

  const getUser = async () => {
    const { data } = await api.get('/me/1')
    setUser(data)
  }

  useEffect(() => {
    getUser()
  }, [])

  const handleToggleMenu = () => setTimeout(() => setShowMenu(!showMenu), 0)
  const handleComponentsInCard = () => setComponentsInCard(!componentsInCard)

  const cardStyle = componentsInCard && 'bg-primary p-6 shadow-lg'

  return (
    <>
      <Header
        innerRef={innerRef}
        showMenu={showMenu}
        onCloseHeader={handleToggleMenu}
        onChangePageContainerStyle={handleComponentsInCard}
      />

      <div className="h-full overflow-auto p-8 pt-6">
        <div className="flex items-center justify-between">
          <UserCard user={user} toggleMenu={handleToggleMenu} />

          <UserOutlined
            onClick={handleToggleMenu}
            className="mb-4 mr-3 cursor-pointer text-3xl text-gray-400"
          />
        </div>

        {!cardStyle && <OnboardingCards />}

        <div
          className={`bg-primary flex flex-wrap gap-6 rounded-2xl p-6 shadow-lg`}
        >
          <div className="flex-1">
            {cardStyle && <OnboardingCards />}

            <Onboarding />
          </div>

          <div className="flex flex-col gap-6">
            <ContactsCard />

            <Links />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main

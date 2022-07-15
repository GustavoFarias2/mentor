import { IUser } from '@/domain/IUser'

interface UserCardProps {
  user?: IUser
  toggleMenu: () => void
}

const UserCard: React.FC<UserCardProps> = ({ user, toggleMenu }) => (
  <div
    className="mb-6 flex cursor-pointer items-center gap-4"
    onClick={toggleMenu}
  >
    <div className="bg-primary h-16 w-16 rounded-full shadow-md" />

    <div className="flex flex-col">
      <span className="mono-spaced text-xl text-gray-800">{user?.name}</span>

      <span className="text-gray-400">Bem vindo ao seu Onboarding!</span>
    </div>
  </div>
)

export default UserCard

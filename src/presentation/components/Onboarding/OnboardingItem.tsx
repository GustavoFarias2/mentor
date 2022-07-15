import { CheckCircleTwoTone, UsergroupAddOutlined } from '@ant-design/icons'

interface RoadMapItemProps {
  color: string
  isEven: boolean
}

const RoadMapItem: React.FC<RoadMapItemProps> = ({ color, isEven }) => {
  let bgColor = 'bg-blue-500'

  if (color === 'green') bgColor = 'bg-emerald-500'
  if (color === 'pink') bgColor = 'bg-pink-500'
  if (color === 'orange') bgColor = 'bg-amber-500'

  return (
    <div
      className={`flex items-center gap-4 ${isEven && 'bg-gray-50'} px-4 py-2`}
    >
      <CheckCircleTwoTone
        twoToneColor="#10b981"
        className="cursor-pointer text-xl"
      />

      <div
        className={`${bgColor} flex h-11 w-11 items-center justify-center rounded-lg`}
      >
        <UsergroupAddOutlined className="text-lg text-white" />
      </div>

      <div className="flex flex-col justify-center">
        <span className="text-sm">Conhecer o time</span>

        <span className="text-sm text-gray-600">
          conversar com o seu padrinho para ele te apresentar a equipe
        </span>
      </div>

      <span className="mb-2 cursor-pointer text-2xl text-gray-600">...</span>
    </div>
  )
}

export default RoadMapItem

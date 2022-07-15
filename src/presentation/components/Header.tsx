import { DoubleRightOutlined } from '@ant-design/icons'

interface HeaderProps {
  innerRef: any
  showMenu: boolean
  onCloseHeader: () => void
  onChangePageContainerStyle: () => void
}

const Header: React.FC<HeaderProps> = ({
  innerRef,
  showMenu,
  onCloseHeader,
  onChangePageContainerStyle
}) => {
  const menuWidth = `${showMenu ? 'w-80' : 'w-0'}`

  return (
    <div
      ref={innerRef}
      className={`${menuWidth} transition-width fixed right-0 h-full border-l-[1px] border-gray-200 bg-white shadow-sm`}
    >
      <div className="flex flex-col items-start p-4">
        <DoubleRightOutlined
          onClick={onCloseHeader}
          className="text-lg text-gray-400"
        />

        <span onClick={onChangePageContainerStyle}>Change style</span>
      </div>
    </div>
  )
}

export default Header

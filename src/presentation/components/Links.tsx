import {
  ProjectOutlined,
  RocketOutlined,
  YuqueOutlined
} from '@ant-design/icons'

const Links = () => (
  <div className="flex min-w-[320px] flex-col rounded-lg bg-white p-5 pt-4 shadow-md">
    <span className="mono-spaced mb-2 text-lg text-gray-900">Links</span>
    <div className="mb-1 flex items-center gap-2 text-blue-500 underline">
      <ProjectOutlined className="cursor-pointer" />

      <span className="cursor-pointer">Jira</span>
    </div>
    <div className="mb-1 flex items-center gap-2 text-blue-500 underline">
      <RocketOutlined className="cursor-pointer" />

      <span className="cursor-pointer">Rocket</span>
    </div>
    <div className="mb-1 flex items-center gap-2 text-blue-500 underline">
      <YuqueOutlined className="cursor-pointer" />

      <span className="cursor-pointer">Feedz</span>
    </div>
  </div>
)

export default Links

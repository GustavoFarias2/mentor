import { CheckCircleOutlined } from '@ant-design/icons'

interface OnboardingCardProps {
  title: string
  subtitle: string
}

const OnboardingCard: React.FC<OnboardingCardProps> = ({ title, subtitle }) => (
  <div className="flex h-48 w-48 cursor-pointer flex-col items-start justify-between rounded-lg bg-white shadow-md">
    <CheckCircleOutlined className="text-primary ml-3 mt-2 text-2xl" />

    <div className="mb-4 ml-4 flex flex-col">
      <span className="mono-spaced text-lg text-gray-700">{title}</span>
      <span className="text-sm text-gray-400">{subtitle}</span>
    </div>
  </div>
)

export default OnboardingCard

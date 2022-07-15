import OnboardingCard from './OnboardingCard'

const OnboardingCards = () => (
  <div className="mb-6 flex gap-6">
    <OnboardingCard title="Jira" subtitle="se familiarizar com a ferramenta" />
    <OnboardingCard
      title="Rocket"
      subtitle="se familiarizar com a ferramenta"
    />
    <OnboardingCard title="Feedz" subtitle="se familiarizar com a ferramenta" />
  </div>
)

export default OnboardingCards

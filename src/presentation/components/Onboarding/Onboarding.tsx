import RoadMapItem from './OnboardingItem'

const items = [
  { color: 'orange' },
  { color: 'green' },
  { color: 'pink' },
  { color: 'pink' },
  { color: 'green' },
  { color: 'green' },
  { color: 'orange' },
  { color: 'green' }
]

const Onboarding = () => (
  <div className="rounded-lg bg-white pb-4 shadow-md">
    <div className="flex justify-center p-2">
      <span
        className="mono-spaced text-gray-800"
        style={{
          letterSpacing: 2
        }}
      >
        ONBOARDING
      </span>
    </div>

    <div className="flex w-full flex-col">
      {items.map(({ color }, i) => (
        <RoadMapItem
          key={`road_map_item_${i}`}
          color={color}
          isEven={i % 2 === 0}
        />
      ))}
    </div>
  </div>
)

export default Onboarding

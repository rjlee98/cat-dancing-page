import { useAnimation } from './hooks/useAnimation'
import Layout from './components/Layout'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'

function App() {
  const { isDancing, toggle } = useAnimation(true)

  return (
    <Layout>
      <DancingCat isDancing={isDancing} />
      <AnimationControls isDancing={isDancing} onToggle={toggle} />
    </Layout>
  )
}

export default App

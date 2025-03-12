import Router from '@routes/index'
import { useNetworkStatus } from './hooks'
import NetworkError from '@pages/404/network-error'

function App() {
  const { isOnline } = useNetworkStatus()

  return (
    <div>
      {isOnline ? <Router /> : <NetworkError />}
    </div>
  )
}

export default App

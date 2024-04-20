import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import Navigation from './Customer/Components/Navigation/Navigation'

import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navigation/>
    </>
  )
}

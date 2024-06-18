import { useState } from 'react'

import './App.css'
import Components from './pages/Components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Components/>
    </>
  )
}

export default App

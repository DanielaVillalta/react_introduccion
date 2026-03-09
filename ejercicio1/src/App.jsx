import { useState } from 'react'
import './App.css'

import Accordion from './components/Accordion'
import Alert from './components/Alert'
import Badge from './components/Badge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
        
        <Accordion/>

        <Alert/>

        <Badge/>
          
      </div>
    </>
  )
}

export default App

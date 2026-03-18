import { useState } from 'react'
import './App.css'

import Card from './components/Card'
import InputText from './components/ImputText'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [profession, setProfession] = useState('')
  const [city, setCity] = useState('')

  return (
    <>
      <InputText
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputText
        label="Age"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        type="number"
      />
      <InputText
        label="Profession"
        placeholder="Enter your profession"
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
      />
      <InputText
        label="City"
        placeholder="Enter your city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Card
        name={name}
        age={age}
        profession={profession}
        city={city}
      />
    </>
  )
}

export default App

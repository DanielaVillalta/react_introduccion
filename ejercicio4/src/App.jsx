import { useState } from 'react'
import './App.css'

import Boton from './components/Boton'
import InputText from './components/InputText'
import Card from './components/Card'

function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [profession, setProfession] = useState('')
  const [city, setCity] = useState('')
  const [cards, setCards] = useState([])

  const agregarCard = () => {
    if (name.trim() !== '') {
      const newCard = { name, age, profession, city }
      setCards([...cards, newCard])
      // Limpiar inputs
      setName('')
      setAge(0)
      setProfession('')
      setCity('')
    }
  }

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
      
      <Boton
        label="Agregar card"
        onClick={agregarCard}
      />

      <ul>
        {cards.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            age={card.age}
            profession={card.profession}
            city={card.city}
          />
        ))}
      </ul>

    </>
  )
}

export default App
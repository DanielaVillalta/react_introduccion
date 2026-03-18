import { useState } from 'react'
import './App.css'

import Boton from './components/Boton'
import InputText from './components/InputText'

function App() {

  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado1, setResultado1] = useState(0)

  const calcularSuma = () => {
    let suma = numero1 + numero2;
    setResultado1(suma)
  }

  const calcularResta = () => {
    let resta = numero1 - numero2;
    setResultado1(resta)
  }

  const calcularMultiplicacion = () => {
    let multiplicacion = numero1 * numero2;
    setResultado1(multiplicacion)
  }

  const calcularDivision = () => {
    let division = numero1 / numero2;
    setResultado1(division)
  }

  // To Do List
  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] = useState([])

  const agregarTarea = () => {
    setTareas([...tareas, tarea])
    setTarea('')
  }

  return (
    <>
      <h1 style={{ color: 'blue' }}>CALCULADORA</h1>
      <InputText
        label="Ingrese el primer número"
        placeholder="Primer número"
        value={numero1}
        onChange={(e) => setNumero1(Number(e.target.value))}
        type="number"
      />
      <InputText
        label="Ingrese el segundo número"
        placeholder="Segundo número"
        value={numero2}
        onChange={(e) => setNumero2(Number(e.target.value))}
        type="number"
      />
      <Boton
        label="Calcular suma"
        onClick={calcularSuma}
      />
      <Boton
        label="Calcular resta"
        onClick={calcularResta}
      />
      <Boton
        label="Calcular multiplicación"
        onClick={calcularMultiplicacion}
      />
      <Boton
        label="Calcular división"
        onClick={calcularDivision}
      />

      <h2>Resultado: {resultado1}</h2>
    </>
  )
}

export default App
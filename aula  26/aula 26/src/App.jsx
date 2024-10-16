import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrimeiroComponente from './Componentes/PrimeiroComponente'
import SegundoComponente from './Componentes/SegundoComponente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>olá mundo</h1>
      <p>primeiro componente</p>
      <PrimeiroComponente/>
      <SegundoComponente/>

    </>
  )
}

export default App

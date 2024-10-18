import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente1 from './componentes/Componente1'
import Imagens from './componentes/imagens'

function App() {
  const [count, setCount] = useState(0)
  let EstiloParagrafo={
    backgroundColor:'black',
    color:'white'
  }

  let azul =true
  let estiloBotão={
    backgroundColor: azul? 'blue':'gray',
    color: 'white',
    padding:'10px'

  }

  return (
    <>
      <div>
        <h1>aula 27</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deserunt,
          dolor aliquid maxime provident saepe nostrum aspernatur pariatur incidunt eos.</p>
        <h1>titulo 2</h1>
        <p className='paragrafo1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, pariatur.</p>
      </div>
      <Componente1 />
      <h1 style={{backgroundColor:'blue', color:'red'}}>titulo 3</h1>
      <p style={EstiloParagrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolor, pariatur. Sunt, dignissimos sit? Facilis quod ratione culpa,
        magnam consectetur incidunt earum cum accusamus pariatur cumque iusto.
        Delectus modi placeat harum?</p>
        <button  style={estiloBotão}>enviar</button>
        <Imagens/>
    </>
  )
}

export default App

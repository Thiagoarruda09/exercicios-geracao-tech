import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente1 from './componentes/Componente1'
import Componente2 from './componentes/Componente2'
import Componente3 from './componentes/Componente3'
import Componente4 from './componentes/Componente4'

function App() {


  return (
    <>
    <div className="container">
      <div className="row d-flex flex-row">
        <div className="col col-6 align-self-center">
          <h3 className='text-warning'>Melhores ofertas personalizadas</h3>
          <h1>queima de estoque nike</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quo voluptatum similique, assumenda architecto velit.</p>
          <button className='btn btn-danger'> ver ofertas</button>


        </div>
        <div className="col col-6">
          <img src="image.png" alt="" />

        </div>
      </div>
    </div>
    <Componente1/>
    <br /><br /><br />
    <Componente2/>
    <br /><br /><br /><br /><br />
    <h4 className='text-start'>produtos em alta</h4>
    <Componente3/>
    <br /><br /><br /><br /><br />
    <Componente4/>
    
     
     
    </>
  )
}

export default App

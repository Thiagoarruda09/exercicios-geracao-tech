import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import bela from './imagens/bela.png'
// import jacob from './imagens/jacob.png'
// import edduard from './imagens/edd.jpg'
import Comp1 from './componentes/Comp1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>aulas imagens</h1>
      
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, similique officia consequuntur fugit quidem ipsum aliquam harum nesciunt vitae nemo! Debitis enim natus sunt cupiditate cumque architecto repellat fuga placeat.</p>
      <img src={jacob} alt="" width={'200px'}/>
      <img src={bela} alt="" width={'200px'}/>
      <img src={edduard} alt=""  width={'200px'}/> */}

      <h1>hooks</h1>
      
      <Comp1/>
      
    </>
  )
}

export default App

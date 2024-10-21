
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './componentes/Comp1'
import Comp2 from './componentes/Comp2'

function App() {
  // let [nome, setNome]=useState('')
  // let [idade, setIdade]=useState( '')
  // let [profissao, setProfissao]=useState('')
  // let[usuarioCadastrado, setUsuarioCadastrado]=useState(null)
  // function carregarDados(){
  //   setNome(document.getElementById('nome').value)
  //   setIdade(document.getElementById('idade').value)
  //   setProfissao(document.getElementById('profissao').value)
    
  //   let cadastro={
  //     nome:nome,
  //     idade:idade,
  //     profissao:profissao
  //   }
  //   setUsuarioCadastrado(cadastro)
  let [mostrar, setMostrar]=useState(false)
  let [msgBtn,setBtn]=useState('mostrar paragrafo')
  function mostrarParagrafo(){

    setMostrar(true)

    if(mostrar==true){
      setMostrar(false)
    }
    if(msgBtn=='mostrar paragrafo'){
      setBtn('esconder paragrafo')
    }
    else{setBtn('mostrar paragrafo')}
  }

    
  
  // }
  return (
    <>
      {/* <h1>Título</h1>
      <input id='nome' type="text" placeholder='Digite seu nome' /><br/>
      <input id='idade' type="text" placeholder='Digite sua idade' /><br/>
      <input id='profissao' type="text" placeholder='Digite sua profissão' /><br/>
      <button onClick={carregarDados} type='button'>Enviar</button>

      {usuarioCadastrado && (<Comp1 usuario={usuarioCadastrado}/>)}  */}
      <button onClick={mostrarParagrafo}>{msgBtn}</button>
      {mostrar &&(
        <div>
          <h2>dormir</h2>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfJe3OeIACCMltVWqB0i2pz10ebIW1gRQMKw&s" alt="" />
        </div>
      )}
<Comp2/>
    </>
  )
}

export default App
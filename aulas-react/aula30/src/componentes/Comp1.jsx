

import { useState } from 'react';


function Comp1(usuario) {
    let [nome, setNome]=useState('')
    let [idade, setIdade]=useState( '')
    let [profissao, setProfissao]=useState('')
    let [clicou, setClicou]=useState(false)
    function mostrarUsuario(){
    
    
        setNome(usuario.nome)
        setIdade(usuario.idade)
        setProfissao(usuario.profissao)
        setClicou(true)

    }


    


   

    return (
        <>
        <button type='button' onClick={mostrarUsuario}> mostrar usuario</button>
           
            {clicou && (<p>
                nome: {usuario.nome}
                <br />
                idade:{usuario.idade}
                <br />
                profissao:{usuario.profissao}
            </p>)}
            
        </>
    );
}

export default Comp1;

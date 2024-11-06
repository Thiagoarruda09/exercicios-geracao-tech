

import { useState } from "react"
import styles from "../componentes/Comp1.module.css"

function Comp1 (prop){
    console.log(prop.nome)

    

// function Comp1 ({cor,modelo,esp}){

//     let borda = {border: `${cor} ${modelo} ${esp}`}
    
    
    
    // let borda1Paragrafo = {border:'solid 2px red'}
    // let borda2Paragrafo = {border:'solid 2px blue'}

    // let [borda, setBorda] = useState(borda1Paragrafo)
    

    // function altera(){
    //     if(borda.border == borda1Paragrafo.border){
    //         setBorda(borda2Paragrafo)
    //     }else{
    //         setBorda(borda1Paragrafo)

    //     }

    // }


    return(
            <>

            {/* <p style={borda} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa modi quam reprehenderit fugiat unde. </p> */}

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa modi quam reprehenderit fugiat unde. </p>

            {/* <button onClick={altera}>Alterar bordas</button> */}
                        
  </>
 )
}

export default Comp1


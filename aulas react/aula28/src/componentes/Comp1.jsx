import styles from './Comp1.module.css'
import { useState } from 'react'

function Comp1() {

    let [Tamanho, setTamanho]=useState(200)

    function aumentarImg(){
        setTamanho(Tamanho+100)
    }
    function diminuirImg(){
        setTamanho(Tamanho-100)
    }
//     let images = ['bela.png', 'jacob.png']

//    let [imgAtual, setImgAtual]=useState(images[0])

//    let [imgAt2, setImgAt2]=useState(images[0])

//    function trocarImg(){
//     if(imgAt2==images[0]){
//         setImgAt2(images[1])
//     }
//     else{
//         setImgAt2(images[0])
//     }

//    }



    return (
        <>
            <h2>Principais Hooks</h2>
            <ul className={styles.lista}>
                <li>useState</li>
                <li>useEffect</li>
                <li>useContext</li>
                <li>useReducer</li>
                <li>useMemo</li>
                <li>useCallback</li>
            </ul>
            <h2>useState</h2>
           {/* <img onClick={
            ()=>{
                imgAtual==images[0]? setImgAtual(images[1]): setImgAtual(images[0])
            }
           } src={imgAtual} alt="" /> */}
           {/* <img onClick={trocarImg} src={imgAt2} alt="" /> */}

           <img src="bela.png" alt="" width={` ${Tamanho}px`}/>
           <button onClick={aumentarImg}>aumentar imagem</button>
           <button onClick={diminuirImg}>diminuir imagem</button>
        </>
    )
}
export default Comp1
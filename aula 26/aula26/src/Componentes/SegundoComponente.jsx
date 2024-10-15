function SegundoComponente(){
 function buscarCep(){
    let cepDigitado=document.getElementById('BuscarCep').value
    fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
          .then((resposta) => resposta.json())
          .then((cep) => {
            let bairro=document.createElement('h3')
            let rua=document.createElement('h3')
            let cidade=document.createElement('h3')
            let estado=document.createElement('h3')



            bairro.innerHTML=cep.bairro
            rua.innerHTML=cep.logradouro
            cidade.innerHTML=cep.localidade
            estado.innerHTML=cep.estado

            document.getElementById('resultado').appendChild(bairro)
            document.getElementById('resultado').appendChild(cidade)
            document.getElementById('resultado').appendChild(rua)
            document.getElementById('resultado').appendChild(estado)
          
          })
          .catch((erro) => {
            //Seu código vai aqui!!!
          });
    // let Resultados=document.getElementById('resultado')
    // let resultado1=document.createElemente('p')
    // resultados=resultado1
    // resultado1.innerHTML=cep.bairro
    // document.getElementById('resultado').appendChild(resultado1)
   
 }
    return(
        <>
        <div>
            <input type="text"  id="BuscarCep" placeholder="Digite seu CEP"/>
            <button type="button" id="enviar" onClick={buscarCep}>enviar</button>
        </div>
        <div id="resultado">

        </div>
        </>
    )

}
export default SegundoComponente
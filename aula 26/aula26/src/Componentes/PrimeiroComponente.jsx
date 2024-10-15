function PrimeiroComponente() {
    let pessoas = [{
        nome: 'thiago',
        idade: 24,
        profissao: 'desenvolvedor web'
    }, {
        nome: 'leticia',
        idade: 24,
        profissao: 'medica veterinaria'
    }]
    function enviarNome() {
        let nome = document.getElementById('nome').value
        let ola2=document.createElement('h1')
        ola2.innerHTML=`olá ${nome}, tudo bem?`
        document.getElementById('ola').appendChild(ola2)
    }
    return (
        <>


            <input type="text" name="" id="nome" placeholder="digite seu nome" />
            <button type="button" onClick={(enviarNome)}>enviar</button>
            <div id="ola">

            </div>
        </>
    )
}
export default PrimeiroComponente
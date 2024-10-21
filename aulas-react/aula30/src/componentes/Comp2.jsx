function Comp2(){

    let usuarios=[
        {id:1, nome:"joao", idade:20},
        {id:2, nome:"mario", idade:21},
        {id:3, nome:"josé", idade:22}

    ]

    let itens=['item 1','item 2','item 3','item 4','item 5']
    return(
        <>
        <h1>loops com map</h1>
        {/* <ul>
           {itens.map((item, i)=>(
            <li key={i}>{item}</li>
           )
        )}
        </ul> */}
        <h1>usuarios</h1>

        <ul>
            {usuarios.map((usuario)=>(
               <li key={usuario.id}>{usuario.nome} - {usuario.idade}</li>
            ))}
         
        </ul>
        </>
    )
}
export default Comp2
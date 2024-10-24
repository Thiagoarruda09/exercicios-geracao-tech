import'./Componente1.css'
function Componente1 (){
    return(
        <>
        <div className="container mt-5">
            <div className="row gap-1 d-flex flex-row">
                <div className="col  fundoCard pt-5 pb-3  rounded-2">
                    <div className="row d-flex flex-row">
                        <div className="col">
                            <h6 className="  desconto">30%off</h6>
                            <h3 className='teste'>novo drop supreme</h3>
                            <button className="btn btn-light corFonteBotaoComp1">comprar</button>
                        </div>
                        <div className="col">
                           <img src="camisa1.png" alt="" width={'150px'} />
                        </div>
                    </div>
                </div>
                <div className="col  fundoCard pt-5 pb-3  rounded-2">
                    <div className="row d-flex flex-row">
                        <div className="col">
                            <h6 className="  desconto">30%off</h6>
                            <h3>novo drop supreme</h3>
                            <button className="btn btn-light corFonteBotaoComp1">comprar</button>
                        </div>
                        <div className="col">
                            <img src="sapato2.png" alt="" width={'150px'} />
                        </div>
                    </div>
                </div>
                <div className="col  fundoCard pt-5  pb-3 rounded-2">
                    <div className="row d-flex flex-row">
                        <div className="col">
                            <h6 className="  desconto">30%off</h6>
                            <h3>novo drop supreme</h3>
                            <button className="btn btn-light corFonteBotaoComp1">comprar</button>
                        </div>
                        <div className="col">
                           <img src="fone.png" alt=""  width={'150px'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Componente1
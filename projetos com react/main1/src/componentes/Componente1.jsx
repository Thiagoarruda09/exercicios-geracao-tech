import'./Componente1.css'
function Componente1 (){
    return(
        <>
        <div className="container">
            <div className="row d-flex flex-row">
                <div className="col col-4">
                    <div className="row d-flex flex-row">
                        <div className="col">
                            <h3 className="bg-warning rounded">30%off</h3>
                            <h2 className='teste'>novo drop supreme</h2>
                            <button className="btn btn-light">comprar</button>
                        </div>
                        <div className="col">
                           <img src="camisa1.png" alt="" width={'150px'} />
                        </div>
                    </div>
                </div>
                <div className="col col-4">
                    <div className="row d-flex flex-row">
                        <div className="col">
                            <h3 className="bg-warning rounded">30%off</h3>
                            <h2>novo drop supreme</h2>
                            <button className="btn btn-light">comprar</button>
                        </div>
                        <div className="col">
                            <img src="sapato2.png" alt="" width={'150px'} />
                        </div>
                    </div>
                </div>
                <div className="col col-4">
                    <div className="row d-flex flex-row">
                        <div className="col">
                            <h3 className="bg-warning rounded">30%off</h3>
                            <h2>novo drop supreme</h2>
                            <button className="btn btn-light">comprar</button>
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
import './Componente2.css'
function Componente2() {

    return (
        <>
           
            <div className="container ">
            <h3 className='text-center mb-5'>coleções em destaque</h3>
                <div className="row d-flex gap-5 flex-row justify-content-center">
                    <div className="col col-1">
                        <div className='icone'><img src="icone1.png" className='icone' alt="" width={'60px'} /></div>
                        <h6>camisetas</h6>
                    </div>
                    <div className="col col-1">
                        <div className='icone'><img src="icone2.png" className='icone' alt="" width={'60px'} /></div>
                        <h6>calças</h6>
                    </div>
                    <div className="col col-1">
                        <div className='icone'><img src="icone3.png" className='icone' alt="" width={'60px'} /></div>
                        <h6>bonés</h6>
                    </div>
                    <div className="col col-1">
                        <div className='icone'><img src="icone4.png" className='icone' alt="" width={'60px'} /></div>
                        <h6>headphones</h6>
                    </div>
                    <div className="col col-1">
                        <div className='icone'><img src="icone5.png" className='icone' alt="" width={'60    px'} /></div>
                        <h6>tênis</h6>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Componente2
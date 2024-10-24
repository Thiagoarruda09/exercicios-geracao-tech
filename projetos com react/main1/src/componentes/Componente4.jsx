import './Componente4.css'
function Componente4() {
  return (
    <>
      <div className="container-fluid corDeFundoComp4">
        <div className="row  d-flex flex-row">
          <div className="col col-6 gradiente">
            <img src="sapato4.png" alt="" width={"500px"} />
          </div>
          <div className="col col-5 offset-1 align-self-center">
          <p className='corFonteRosa'><b>oferta especial</b></p>
            <h1>queima de estoque nike</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quo
              voluptatum similique, assumenda architecto velit.
            </p>
            <button className="btn corBotaoRosa text-light"> ver ofertas</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Componente4;

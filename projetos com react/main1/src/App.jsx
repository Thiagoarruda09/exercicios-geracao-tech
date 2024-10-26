import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import './App.css'
import Componente1 from "./componentes/Componente1";
import Componente2 from "./componentes/Componente2";
import Componente3 from "./componentes/Componente3";
import Componente4 from "./componentes/Componente4";

function App() {
  return (
    <>
      <div className="container-fluid corDeFundoBranco">

        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="container">
                <div className="row d-flex flex-row">
                  <div className="col align-self-center">
                    <h6 className="text-warning">Melhores ofertas personalizadas</h6>
                    <h1>queima de estoque nike</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, quaerat.
                    <button className="btn corBotaoRosa text-light mt-5">ver ofertas</button>
                  </div>
                  <div className="col">
                    <img src="image.png" alt="" className="d-block w-100" />

                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="container">
                <div className="row d-flex flex-row">
                  <div className="col align-self-center">
                    <h6 className="text-warning">Melhores ofertas personalizadas</h6>
                    <h1>queima de estoque nike</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, quaerat.
                    <button className="btn corBotaoRosa text-light mt-5">ver ofertas</button>
                  </div>
                  <div className="col">
                  <img src="image.png" alt="" className="d-block w-100" />

                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="container">
                <div className="row d-flex flex-row">
                  <div className="col  align-self-center">
                    <h6 className="text-warning">Melhores ofertas personalizadas</h6>
                    <h1>queima de estoque nike</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, quaerat.
                    <button className="btn corBotaoRosa text-light mt-5">ver ofertas</button>
                  </div>
                  <div className="col">
                  <img src="image.png" alt="" className="d-block w-100" />

                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <Componente1 />
      <br />
      <br />
      <br />
      <Componente2 />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Componente3 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Componente4 />

    </>
  );
}

export default App;

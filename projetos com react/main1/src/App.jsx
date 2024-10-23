import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from './App.module.css'
import Componente1 from "./componentes/Componente1";
import Componente2 from "./componentes/Componente2";
import Componente3 from "./componentes/Componente3";
import Componente4 from "./componentes/Componente4";

function App() {
  return (
    <>
      <div className="container fundo01">
        <div className="row d-flex flex-row">
          <div className="col col-6 align-self-center">
            <h3 className="text-warning">Melhores ofertas personalizadas</h3>
            <h1 className={styles.teste}>Queima de stoque Nike 🔥</h1>
            <p className="teste">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quo
              voluptatum similique, assumenda architecto velit.
            </p>
            <button className="btn btn-danger"> ver ofertas</button>
          </div>
          <div className="col col-6">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="image.png" alt="" className="d-block w-100" />
                </div>
                <div class="carousel-item">
                  <img src="image.png" alt="" className="d-block w-100" />
                </div>
                <div class="carousel-item">
                  <img src="image.png" alt="" className="d-block w-100" />
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
      <h4 className="text-start">produtos em alta</h4>
      <Componente3 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Componente4 />
      <h1>mudança</h1>
    </>
  );
}

export default App;

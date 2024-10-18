import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Componente1 from "./componentes/Componente1";

function App() {
  let cor ='purple'
  return (
    <>
      <h1>titulo</h1>
      {/* props */}
      <Componente1 cor={cor} estilo='solid' esp='5px'/>
    </>
  );
}

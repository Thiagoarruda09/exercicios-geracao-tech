import { useState } from "react";
import styles from "./Componente1.module.css";

function Componente1({ cor, estilo, esp }) {
  let bordas = { border: `${cor} ${estilo} ${esp}` };

  let borda1Paragrafo = { border: "solid 2px red" };
  let borda2Paragrafo = { border: "solid 2px blue" };

  let [borda, setBorda] = useState(borda1Paragrafo);

  function alterarBordas() {
    if (borda.border == borda1Paragrafo.border) {
      setBorda(bordas);
    } else {
      setBorda(borda1Paragrafo);
    }
  }

  return (
    <>
      <p style={borda}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        repudiandae, libero numquam amet, tenetur sit ad vel beatae minus labore
        laborum laboriosam, id aliquid distinctio debitis dicta cumque? In, ad?
      </p>
      <button onClick={alterarBordas}>Alterar bordas</button>
    </>
  );
}
export default Componente1;

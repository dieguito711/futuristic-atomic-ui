import styled from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";
const Container = styled.figure`
  height: 80%;
  z-index: 1;
  position: relative;
  width: 20%;
  font-size: 0;
  img {
    width: 100%;
    object-fit: cover;
  }
  .figcaption_container {
    width: 100%;
  }
  figcaption {
    ::selection {
      background: ${leerColor(colores.violeta1)};
      color: ${leerColor(colores.blanco)};
    }
    width: 100%;
    z-index: 100;
    background: ${leerColor(colores.blanco)} !important;
    padding: 0.5em;
    letter-spacing: 0.1em;
    text-align: left;
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    height: 5em;
    border: 2px solid ${leerColor(colores.violeta2)};
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${leerColor(colores.gris)};
  :hover {
    background: linear-gradient(
      ${leerColor(colores.verde1)},
      ${leerColor(colores.amarillo1)},
      ${leerColor(colores.rojo1)},
      ${leerColor(colores.violeta1)},
      ${leerColor(colores.violeta2)}
    );
  }
  opacity: 0.3;
`;

export { Container, Overlay };

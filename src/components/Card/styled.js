import styled from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";
const Container = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-start;
  border: 2px solid ${leerColor(colores.violeta2)};
  padding: 1em;
  margin-bottom: 2em;
  h1 {
    ::selection {
      background: ${leerColor(colores.violeta1)};
      color: ${leerColor(colores.blanco)};
    }
    padding: 0;
    margin: 0 0 0.5em 0;
    color: ${leerColor(colores.violeta2)};
    font-size: 1.5em;
    font-family: "Montserrat", sans-serif;
  }
  p {
    ::selection {
      background: ${leerColor(colores.violeta1)};
      color: ${leerColor(colores.blanco)};
    }
    padding: 0;
    margin: 0 0 1em 0;
    text-align: left;
  }
`;
const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  button {
    margin-right: 1em;
  }
`;
export { Container, ButtonsContainer };

import styled from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";

const Container = styled.button`
  margin: 0 2em;
  padding: 0.5em 1em;
  background-color: ${leerColor(colores.violeta1)};
  color: ${leerColor(colores.blanco)};
  border: none;
  :hover {
    background-color: ${leerColor(colores.violeta2)};
  }
  :active {
    background-color: ${leerColor(colores.violeta1)};
    color: ${leerColor(colores.violeta2)};
  }
`;

export { Container };

import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";
import { BsSearch } from "react-icons/bs";

const Container = styled.input`
  @media (max-width: 700px) {
    margin: 1em auto;
  }
  font-size: 1em;
  color: ${leerColor(colores.blanco)};
  background-color: ${leerColor(colores.negro)};
  font-family: "Montserrat", cursive;
  height: 5em;
  width: 30% !important;
  word-break: break-all;
  border: solid;
  border-image-slice: 1;
  border-width: 1px;
  border-color: ${leerColor(colores.violeta1)};
  :focus {
    color: ${leerColor(colores.violeta1)};
    outline: none;
    border-width: 1px 1px 1px 2.5px;
    border-image-source: linear-gradient(
      to bottom,
      ${leerColor(colores.violeta1)},
      ${leerColor(colores.violeta2)}
    );
  }
  :hover {
    color: ${leerColor(colores.violeta1)};
    outline: none;
    border-width: 1px 1px 1px 2.5px;
    border-image-source: linear-gradient(
      to bottom,
      ${leerColor(colores.violeta1)},
      ${leerColor(colores.violeta2)}
    );
  }
`;

export { Container };

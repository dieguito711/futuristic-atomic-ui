import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";

const QuoteContainer = styled.p`
  font-size: 1.2em;
  color: ${leerColor(colores.blanco)};
  font-family: "Gugi", cursive;
  width: 90%;
  text-align: left;
  ::selection {
      background: ${leerColor(colores.violeta1)};
      color: ${leerColor(colores.blanco)};
    }
`;

const DivQuoteContainer = styled.div`
  @media (max-width: 700px) {
    margin: 1em auto;
  }
  border: solid;
  border-image-slice: 1;
  border-width: 0px 0px 0px 7px;
  border-image-source: linear-gradient(
    to bottom,
    ${leerColor(colores.verde2)},
    ${leerColor(colores.verde1)},
    ${leerColor(colores.amarillo1)},
    ${leerColor(colores.amarillo2)},
    ${leerColor(colores.rojo1)},
    ${leerColor(colores.rojo1)},
    ${leerColor(colores.rojo2)},
    ${leerColor(colores.violeta1)},
    ${leerColor(colores.violeta2)}
  );
  width: 50% !important;
  padding-left: 1em;
`;

export { QuoteContainer, DivQuoteContainer };

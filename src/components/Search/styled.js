import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";
import { BsSearch } from "react-icons/bs";

const SearchContainer = styled.input`
  background-color: ${leerColor(colores.negro)};
  font-size: 1em;
  color: ${leerColor(colores.blanco)};
  font-family: "Montserrat", cursive;
  text-align: left;
  border: none;
`;

const DivSearchContainer = styled(motion.div)`
  svg {
    color: ${leerColor(colores.blanco)};
  }
  border: solid;
  border-image-slice: 1;
  border-width: 0px 0px 3px 0px;
  border-color: ${leerColor(colores.blanco)};
  :focus {
    color: ${leerColor(colores.violeta1)};
    outline: none;
    border-image-source: linear-gradient(
      to right,
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
  }
  :hover {
    svg {
      color: ${leerColor(colores.violeta1)};
    }
    color: ${leerColor(colores.violeta1)};
    outline: none;
    border-image-source: linear-gradient(
      to right,
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
  }
  margin: 0 auto !important;
  width: fit-content;
  :focus {
    color: ${leerColor(colores.violeta1)};
  }
  :active {
    color: ${leerColor(colores.violeta1)};
  }
  :hover {
    color: ${leerColor(colores.violeta1)};
  }
`;

export { SearchContainer, DivSearchContainer };

import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";
import { BsSearch } from "react-icons/bs";


const Container = styled.input `
font-size:1em;
color: black;
font-family: "Montserrat", cursive;
border: solid;
border-image-slice: 1;
border-width: 0px 0px 1px 0px;
border-color: ${leerColor(colores.violeta1)};
:focus {
    color:${leerColor(colores.violeta1)};
    outline: none;
    border-width: 0px 0px 2.5px 0px;
    border-image-source: linear-gradient( to right, 
      ${leerColor(colores.violeta1)},
      ${leerColor(colores.violeta2)});
}
:hover {
    color:${leerColor(colores.violeta1)};
    outline: none;
    border-width: 0px 0px 2.5px 0px;
    border-image-source: linear-gradient( to right, 
      ${leerColor(colores.violeta1)},
      ${leerColor(colores.violeta2)});
}
`;

export { Container } ;
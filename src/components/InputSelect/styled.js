import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";

const InputSelectContainer = styled.select `
font-size:1em;
color: ${leerColor(colores.violeta1)};
font-family: "Montserrat", cursive;
text-align: right !important;
border: solid;
border-image-slice: 1;
border-width: 0px 0px 3px 0px;
border-color: ${leerColor(colores.violeta1)};

option {

    color: ${leerColor(colores.violeta1)};
}

`;


const DivInputSelectContainer = styled.div `
border: none;
margin: 0 !important;
min-width: 30em !important;


`;

export { InputSelectContainer, DivInputSelectContainer } ;
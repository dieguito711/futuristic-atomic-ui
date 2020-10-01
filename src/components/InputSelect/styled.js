import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";

const InputSelectContainer = styled.select `
padding: 0.5em 2em 0.5em 2em;
font-size:1em;
color: ${leerColor(colores.violeta1)};
font-family: "Montserrat", cursive;
text-align: right !important;
border: solid;
border-image-slice: 1;
border-width: 0px 0px 3px 0px;
border-color: ${leerColor(colores.violeta1)};

:hover {

    background-color: #FCFAFA;
    border-color: linear-gradient( to right, 
      ${leerColor(colores.violeta1)},
      ${leerColor(colores.violeta2)});
}

:focus {

    outline: none;
}

option {

    color: ${leerColor(colores.violeta1)};
    background-color: #FCFAFA;
}

`;


export { InputSelectContainer } ;
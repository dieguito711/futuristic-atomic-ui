import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";
import { BsSearch } from "react-icons/bs";


const SearchContainer = styled.input `
font-size:1em;
color: black;
font-family: "Montserrat", cursive;
text-align: right !important;
border: solid;
border-image-slice: 1;
border-width: 0px 0px 3px 0px;
border-color: black;
:focus {
    color:${leerColor(colores.violeta1)};
    outline: none;
    border-image-source: linear-gradient( to right, 
      ${leerColor(colores.verde2)},
      ${leerColor(colores.verde1)},
      ${leerColor(colores.amarillo1)},
      ${leerColor(colores.amarillo2)},
      ${leerColor(colores.rojo1)},
      ${leerColor(colores.rojo1)},
      ${leerColor(colores.rojo2)},
      ${leerColor(colores.violeta1)},
      ${leerColor(colores.violeta2)});
}
:hover {
    color:${leerColor(colores.violeta1)};
    outline: none;
    border-image-source: linear-gradient( to right, 
      ${leerColor(colores.verde2)},
      ${leerColor(colores.verde1)},
      ${leerColor(colores.amarillo1)},
      ${leerColor(colores.amarillo2)},
      ${leerColor(colores.rojo1)},
      ${leerColor(colores.rojo1)},
      ${leerColor(colores.rojo2)},
      ${leerColor(colores.violeta1)},
      ${leerColor(colores.violeta2)});
}
`;

const DivSearchContainer = styled.div `
border: none;
margin: 0 !important;
width: 15em !important;
:focus {
    color:${leerColor(colores.violeta1)};
};
:active {
    color:${leerColor(colores.violeta1)};
};
:hover {
    color:${leerColor(colores.violeta1)};
}

`;

export { SearchContainer, DivSearchContainer } ;
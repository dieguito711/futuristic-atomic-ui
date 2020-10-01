import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";


const DivTitleContainer = styled.div `
border: solid;
border-image-slice: 1;
border-width: 0px 0px 7px 0px;
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

margin: 0 !important;
width: min-content !important;

`

const TitleContainer = styled.h1 `
font-size: ${(props) => {
    switch (props.type) {
        case "h1":
            return "2.5em";
        case "h2":
            return "2em";
        case "h3":
            return "1.7em";
        case "h4":
            return "1.5em";
        case "h5":
            return "1.3em";
        case "h6":
            return "1em";
            
    }
}};

font-weight: ${(props) => {
    switch (props.type) {
        case "h1":
            return "900";
        case "h2":
            return "800";
        case "h3":
            return "600";
        case "h4":
            return "500";
        case "h5" :
            return "300";
        case "h6":
            return "300";
    }
}};

color: black;
font-family: "Gugi", cursive;
text-transform: uppercase;
`

export { TitleContainer, DivTitleContainer } ;
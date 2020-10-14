import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";

const InputRadioContainer = styled.div `

label {

  font-family: "Montserrat", cursive;
  color:white;
  font-size: 1em;
}

div {

  border: solid 2px;
  border-color: ${props => props.color ? colores.violeta2 : colores.violeta1};
  padding-left: 1.2em;
  display: inline;
  margin-right: 0.5em;
  border-radius: 5em;
  background-color: ${props => props.color ? colores.violeta2 : 'none'};
}

:hover {
  div {
    background-color: ${leerColor(colores.gris)};
  }
}
`

export { InputRadioContainer } ;

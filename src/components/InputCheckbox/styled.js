import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";

const InputCheckboxContainer = styled.div `

label {

  font-family: "Montserrat", cursive;
  color:white;
  font-size: 1em;
}

div {

  border: solid 2px;
  border-color: ${props => props.color ? colores.violeta2 : colores.violeta1};
  padding-left: 1.1em;
  display: inline;
  margin-right: 0.5em;
  border-radius: 0.2em;
  background-color: ${props => props.color ? colores.violeta2 : 'none'};
}


:hover {
  div {
    background-color: ${leerColor(colores.gris)};
  }
}

.selected{
  div {
    background-color: ${leerColor(colores.gris)};
  }

}

`


export { InputCheckboxContainer } ;

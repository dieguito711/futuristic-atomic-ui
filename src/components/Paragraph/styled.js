import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";

const Container = styled.p`
  font-size: 0.9em;
  color: ${leerColor(colores.blanco)};
  font-family: "Montserrat", cursive;
  text-align: left;
  font-weight: 500;
  width: 80%;
`;

export { Container };

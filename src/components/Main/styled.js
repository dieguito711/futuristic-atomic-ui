import styled from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";
const Container = styled.main`
  font-family: "Montserrat", sans-serif;
  background-color: ${leerColor(colores.blanco)};
  color: ${leerColor(colores.blanco)};
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export { Container };

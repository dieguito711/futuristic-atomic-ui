import styled from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";

const Container = styled.div`
  margin: 1em;
  min-height: 50vh;
  color: ${leerColor(colores.blanco)};
  img {
    width: 200px !important;
  }
`;

export { Container };

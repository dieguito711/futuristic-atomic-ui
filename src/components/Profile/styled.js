import styled from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";

const Container = styled.div`
  margin: 1em;
  min-height: 50vh;
  color: ${leerColor(colores.blanco)};
  div {
    margin: 0 auto;
    width: 40%;
    display: flex;
    justify-content: flex-start;
  }
  img {
    border-radius: 50%;
    width: 200px !important;
  }
  p {
    margin: auto !important;
    width: fit-content !important;
  }
`;

export { Container };

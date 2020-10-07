import styled from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";
const Container = styled.section`
  margin: 1em auto;
  width: 90%;
  display: flex;
  flex-direction: ${(props) => props.direction} !important;
  justify-content: space-around;
  align-items: flex-start;
  align-self: flex-start;
  @media (max-width: 760px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

export { Container };

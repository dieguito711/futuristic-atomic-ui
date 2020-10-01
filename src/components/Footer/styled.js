import styled from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";
const Container = styled.footer`
  font-family: "Montserrat", sans-serif;
  background-color: ${leerColor(colores.negro)};
  color: #fff;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  padding-top: 4em;
  img {
    width: 8em;
  }
`;
const Legal = styled.span`
  ::selection {
    background: ${leerColor(colores.violeta1)};
    color: ${leerColor(colores.blanco)};
  }
  margin-top: 2em;
  padding-bottom: 2em;
`;
export { Container, LogoContainer, Legal };

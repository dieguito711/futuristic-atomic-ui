import styled from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";
const Container = styled.header`
  font-family: "Montserrat", sans-serif;
  background-color: ${leerColor(colores.negro)};
  color: #fff;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;
const LogoContainer = styled.div`
  margin-left: 4em;
  img {
    width: 8em;
  }
`;
const Nav = styled.div`
  ul {
    display: flex;
    justify-content: flex-end;
    margin-right: 2em;
  }
  ul li {
    margin-right: 2em;
    list-style-type: none;
    font-size: 12px;
  }
  li:hover {
    color: ${leerColor(colores.violeta1)};
    cursor: pointer;
  }
  li:active {
    color: ${leerColor(colores.violeta2)};
  }
`;
const Link = styled.a`
  text-decoration: none;
  color: ${leerColor(colores.blanco)};
  :hover {
    color: ${leerColor(colores.violeta1)};
  }
  /* :visited {
    color: ${leerColor(colores.blanco)};
  } */
`;
export { Container, Nav, LogoContainer, Link };

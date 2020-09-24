import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.header`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
`;
const Nav = styled.div`
  ul {
    display: flex;
    justify-content: flex-end;
  }
  ul li {
    margin-right: 1em;
    list-style-type: none;
  }
`;

export { Container, Nav };

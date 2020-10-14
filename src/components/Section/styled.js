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
  .aboutus_figure{
    margin: 0 auto !important;
  }
  .aboutus_button{
    margin: 2em auto;
  }
  @media (max-width: 760px) {
    flex-direction: column;
    margin: 0 auto;
    .grid_autores{

    grid-template-columns: 1fr !important;

    grid-row-gap: 1em;
  }
  }
  .grid_autores{
    width: 100%;
    margin: 4em auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content:center;
    align-self: center;
    align-items: center;
    grid-row-gap: 2em;
  }

`;

export { Container };

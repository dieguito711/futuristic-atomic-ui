import { createGlobalStyle } from "styled-components";
import { leerColor, colores } from "../constants";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Gugi&family=Montserrat:wght@400;600&display=swap');
body{
    margin: 0 auto;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: ${leerColor(colores.negro)};
}
`;

export default GlobalStyle;

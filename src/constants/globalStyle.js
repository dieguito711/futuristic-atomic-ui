import { createGlobalStyle } from "styled-components";

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
}
`;

export default GlobalStyle;

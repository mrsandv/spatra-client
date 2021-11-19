import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: "Montserrat";
    width: 100vw;
    height: 100vh;
  }
  *,
    *:before,
    *:after {
        box-sizing: border-box;
        /* outline: dashed deeppink 1px; */
    }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
}

*,
*::before,
*::after {
box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}
body {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  color: #000;
  line-height: 1.6;
  background-color: white;
  min-height:100vh;
  width:100%;
}

`;

export default GlobalStyle;

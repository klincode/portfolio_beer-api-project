import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color:${props => props.theme.backgroundColor};
  color:${props => props.theme.secondaryColor};
  font-size:14px;
  transition:background-color 0.7s;
}
* {
  box-sizing: border-box;
}

`;

export default GlobalStyle

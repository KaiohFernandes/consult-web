import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    /* -webkit-font-smoothing: antialiased; */
  }

  body, input, button {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  #root {
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }

`;

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f5f5f5;
    color: #333;
  }

  body, input, button {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
  }

  @media(min-width: 900px) {
    :root {
      font-size: 62.5%;
    }
  }

  @media(max-width: 350px) {
    :root {
      font-size: 58.5%;
    }
  }
`

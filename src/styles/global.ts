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
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    font-weight: bold;
  }

  body, input, button {
    font-family: 'Roboto Condensed', sans-serif;
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
`

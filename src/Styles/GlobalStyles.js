import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: white;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background-color: #282c34;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #333;
    }
  }

  input, textarea {
    background-color: #1a1a1a;
    border: 1px solid #333;
    color: white;
    padding: 0.5rem;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`;

export default GlobalStyles;
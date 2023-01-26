import { createGlobalStyle } from "styled-components";
import Colors from "./Colors";
const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
  };
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight:400 ;
    color:${Colors.Black}
  };
 p,h1,h3 {
    margin:0;
 };
 
`;

export default GlobalStyles;

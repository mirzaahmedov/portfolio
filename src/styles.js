import styled, { createGlobalStyle } from "styled-components";
import Hanson from "./fonts/Hanson.otf";

export const GlobalStyles = createGlobalStyle`
   @font-face {
      font-family: "Hanson";
      src: url(${Hanson});
   }

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      font-family: "Hanson";
      color: #dbd8e3;
      cursor: none;
   }

   p {
      max-width: 70ch;
      font-size: 1.2rem;
      font-family: "Poppins";
      margin-top: 40px;
      line-height: 36px;
      opacity: .9;
   }
`;

export const Headline = styled.h1`
 font-size: 70px;
 line-height: 75px;
 max-width: 16ch;
 text-transform: uppercase;
 font-family: "Hanson", sans-serif;
 text-align: ${(props) => props.align || null};
`;

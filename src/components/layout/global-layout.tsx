import React from "react";
import { createGlobalStyle } from "styled-components";

// shabnam weights: 100, 300, 400, 500, 700 */
// estedad weights: 100, 200, 300, 400, 500, 600, 700, 800, 900 */

const GlobalStyle = createGlobalStyle`  
`;

const GlobalLayout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <link rel="preconnect" href="//fdn.fontcdn.ir" />
      <link rel="preconnect" href="//v1.fontapi.ir" />
      <link href="https://v1.fontapi.ir/css/Shabnam" rel="stylesheet"></link>
      <link href="https://v1.fontapi.ir/css/Estedad" rel="stylesheet"></link>
      <link
        href="https://fonts.googleapis.com/css?family=Fira Mono"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <GlobalStyle />
      {children}
    </React.Fragment>
  );
};

export default GlobalLayout;

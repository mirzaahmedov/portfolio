import React from "react";
import styled from "styled-components";

import { Headline } from "./styles";

const Nav = styled.nav`
 font-family: "Kaushan Script", cursive;
 text-align: center;
 font-size: 1.6rem;
 margin-bottom: 2em;
`;

const Home = () => {
 return (
  <>
   <Nav>mirzaahmedov</Nav>
   <Headline align="center" outline>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aspernatur
   </Headline>
  </>
 );
};

export default Home;

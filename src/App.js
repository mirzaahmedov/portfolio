import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

import Cursor from "./Cursor";
import { GlobalStyles } from "./styles";

const Layer = styled.div`
 height: 100vh;
 width: 100%;
 padding: 80px;
 background-color: ${(props) => props.shade};
 color: ${(props) => props.text || "#dbd8e3"};
 ${(props) =>
  props.center
   ? "display: flex; justify-content: center; align-items: center; flex-direction: column;"
   : ""}
 ${(props) =>
  props.middle
   ? "display: flex; justify-content: center; flex-direction: column;"
   : ""}
 position: sticky;
 top: 0;

 &::before {
  content: "";
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  height: 40px;
  width: 240px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${(props) => props.shade};
 }
`;

const App = () => {
 const [mouse, setMouse] = useState({ x: null, y: null });

 useEffect(() => {
  document.addEventListener("mousemove", (e) => {
   setMouse({ x: e.clientX, y: e.clientY });
  });
 }, [setMouse]);

 return (
  <div>
   <GlobalStyles />

   <Layer shade="#dbd8e3" text="#484257" center>
    <Home />
   </Layer>
   <Layer shade="#5c5470" middle>
    <About />
   </Layer>
   <Layer shade="#352f44">
    <Projects />
   </Layer>
   <Layer shade="#1e1a28">
    <Contact />
   </Layer>

   <Cursor mouse={mouse} />
  </div>
 );
};

export default App;

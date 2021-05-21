import React from "react";
import styled from "styled-components";

import { Headline } from "./styles";

const ProjectList = styled.ul`
 list-style: none;
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 padding: 40px 20px;
`;

const Project = styled.h2`
 font-size: 50px;
 margin-top: 20px;
 position: relative;
 transition: 0.5s;
 opacity: 0.9;

 &::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 100%;
  background-color: currentColor;
  height: 2px;
  transition: 0.5s;
 }

 &:hover {
  color: #9166ff;
 }

 &:hover::after {
  right: 0;
 }
`;

const Projects = () => {
 return (
  <>
   <Headline>My featured works</Headline>
   <ProjectList>
    <Project>themoviedbapi</Project>
    <Project>voicecode</Project>
    <Project>mirzaahmedov blog</Project>
    <Project>express nodes</Project>
   </ProjectList>
  </>
 );
};

export default Projects;

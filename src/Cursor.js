import React from "react";
import styled from "styled-components";

const CursorElement = styled.div.attrs((props) => ({
 style: {
  top: props.cy - 15 + "px",
  left: props.cx - 15 + "px",
 },
}))`
 width: 30px;
 height: 30px;
 border-radius: 50%;
 background-color: #9166ff;
 position: fixed;
 z-index: 1;
 pointer-events: none;
`;

const Cursor = ({ mouse }) => {
 return (
  <>
   <CursorElement cx={mouse.x} cy={mouse.y}></CursorElement>
  </>
 );
};

export default Cursor;

import React from "react";
import styled from "styled-components";

import { Headline } from "./styles";

const Form = styled.form`
 display: flex;
 flex-direction: column;
 max-width: 500px;
 margin: 40px 0;
`;

const Input = styled.input`
 height: 60px;
 background-color: #fff1;
 color: #9166ff;
 border: none;
 padding: 0 10px;
 font-size: 1.1rem;
 font-family: "Poppins", sans-serif;

 &:active,
 &:focus {
  outline: 2px solid #9166ff;
 }
`;

const Label = styled.label`
 margin-top: 10px;
 margin-bottom: 5px;
`;

const Button = styled.button`
 height: 60px;
 margin-top: 20px;
 background-color: #9166ff;
 border: none;
 font-family: "Hanson";
 font-size: 20px;
 color: #fff;
 transition: 0.5s;

 &:hover {
  background-color: #6d33ff;
 }
`;

const TextArea = styled.textarea`
 height: 180px;
 background-color: #fff1;
 border: none;
 color: #9166ff;
 padding: 10px;
 font-size: 1.1rem;
 font-family: "Poppins", sans-serif;

 &:active,
 &:focus {
  outline: 2px solid #9166ff;
 }
`;

const Contact = () => {
 return (
  <>
   <Headline>Contact me</Headline>
   <Form action="/">
    <Label htmlFor="email">Email</Label>
    <Input type="text" name="email" />
    <Label htmlFor="name">Name</Label>
    <Input type="text" name="name" />
    <Label htmlFor="message">Message</Label>
    <TextArea name="message"></TextArea>
    <Button>Send Message</Button>
   </Form>
  </>
 );
};

export default Contact;

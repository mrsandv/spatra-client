import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 20px;
  background-color: #ce6262;
  color: #fff;
  font-family: "Montserrat";
  font-weight: 600;
  min-height: 50px;
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`;

const Option = styled.li``;

const Footer = () => (
  <Wrapper>
    <List>
      <Option>2021 Spanish Training Academy</Option>
      <Option>contacto@spanish-ta.com</Option>
    </List>
  </Wrapper>
);

export default Footer;

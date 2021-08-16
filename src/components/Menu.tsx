import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

const Image = styled.img<{ width: string }>`
  width: ${({ width }) => width || "300px"};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  margin: 0 auto;
  padding: 5px 10px;
`;

const Menu = () => {
  return (
    <Header>
      <Link to="/">
        <Image width="300px" src={logo} alt="logo-spanish-trading" />
      </Link>
      <ColorModeSwitcher />
    </Header>
  );
};

export default Menu;

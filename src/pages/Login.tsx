import React from "react";
import { Button, Input } from "@chakra-ui/react";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Wrapper>
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("iniciando sesión");
        }}
      >
        <Input
          required
          placeholder="Correo electronico"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          required
          placeholder="Contraseña"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button disabled={!(email && password)} type="submit">
          Iniciar Sesión
        </Button>
      </form>
    </Wrapper>
  );
};

export default Login;

import React from "react";
import { Button, Input, Text } from "@chakra-ui/react";
import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorAuth, setErrorAuth] = useState("");
  return (
    <Wrapper>
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          if (user === "admin" && password === "admin") {
            sessionStorage.setItem("isAuth", "true");
            history.push("/admin");
          } else setErrorAuth("Error: Revisa tu usuario y/o contraseña");
        }}
      >
        <Input
          required
          placeholder="Correo electronico"
          onChange={(e) => setUser(e.target.value)}
        />
        <Input
          required
          placeholder="Contraseña"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button disabled={!(user && password)} type="submit">
          Iniciar Sesión
        </Button>
      </form>
      {errorAuth && <Text color="tomato">{errorAuth}</Text>}
    </Wrapper>
  );
};

export default Login;

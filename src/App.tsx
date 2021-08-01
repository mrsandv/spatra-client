import * as React from "react";
import { ChakraProvider, Box, VStack, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SaveTheDay from "./pages/SaveTheDay";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdSend } from "react-icons/md";
import { Button } from "@chakra-ui/react";

const Image = styled.img`
  width: 300px;
`;

const Header = styled.header`
  width: 50%;
  margin: 20px auto;
`;

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Header>
            <a href="https://spanish-ta.com">
              <Image size="200px" src={logo} alt="logo-spanish-trading" />
            </a>
            <p>Sistema de registro para Spanish Traning Academy</p>
            <Link to="/save-the-day">
              <Button rightIcon={<MdSend />} colorScheme="blue">
                Ya tengo folio
              </Button>
            </Link>
            <div id="smart-button-container">
              <div style={{ textAlign: "center" }}>
                <div id="paypal-button-container"></div>
              </div>
            </div>
          </Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/save-the-day" component={SaveTheDay} />
          </Switch>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);

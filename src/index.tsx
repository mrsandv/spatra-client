import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ChakraProvider, theme } from "@chakra-ui/react";
import GlobalStyle from "./styles/GlobalStyles";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <ToastContainer position="top-right"> */}
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <ColorModeScript />
        <ChakraProvider theme={theme}>
          <Routes />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
    {/* </ToastContainer> */}
  </React.StrictMode>,
  document.getElementById("root")
);

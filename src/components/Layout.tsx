import React, { ReactNode } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import styled from "styled-components";

const ContentWrapper = styled.div`
  max-width: 100vw;
  min-height: 84vh;
`;

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Menu />
    <ContentWrapper>{children}</ContentWrapper>
    <Footer />
  </>
);

export default Layout;

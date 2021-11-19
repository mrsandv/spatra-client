import React, { ReactNode } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import styled from "styled-components";

const ContentWrapper = styled.div`
  width: 98vw;
  min-height: 80vh;
`;

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Menu />
    <ContentWrapper>{children}</ContentWrapper>
    <Footer />
  </>
);

export default Layout;

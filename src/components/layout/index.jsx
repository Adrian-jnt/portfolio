import Background from "../background";
import Transition from "../transition";
import { Container } from "./styles";
import Header from "../header";
import Navbar from "../nav";
import React from "react";

const Layout = ({ children }) => {
  return (
    <Container className="overflow-hidden leading-relaxed">
      <Transition />
      <Background>
        <Navbar />
        <Header />
        {children}
      </Background>
    </Container>
  );
};

export default Layout;

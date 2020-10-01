import React from "react";
import "../components/App/index.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="inner">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;

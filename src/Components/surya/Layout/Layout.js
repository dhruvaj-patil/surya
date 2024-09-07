import React from "react";
// import Header from "../surya/Header";

import Footer from "../Footer/Footer";
import Header from "./Header/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;

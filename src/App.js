import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Preloader from "./Components/Preloader";
import ScrollTopBtn from "./Components/ScrollTopBtn";
import Home from "./pages/surya/Home";
import About from "./pages/surya/AboutPage";
import Layout from "./Components/surya/Layout/Layout";
import ConstructionPage from "./pages/surya/ConstructionPage";
import StructuralPage from "./pages/surya/StructuralPage";
import PortfolioPage from "./pages/surya/PortfolioPage";
import CareerPage from "./pages/surya/CareerPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading && false) {
    return <Preloader />;
  } else {
    return (
      <>
        <Layout>
          <ScrollTopBtn />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/construction" element={<ConstructionPage />} />
            <Route path="/services/structural-design" element={<StructuralPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/careers" element={<CareerPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </>
    );
  }
}

export default App;

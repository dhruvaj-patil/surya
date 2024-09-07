import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Preloader from "./Components/Preloader";
import ScrollTopBtn from "./Components/ScrollTopBtn";
import Home from "./pages/Home";
import About from "./pages/AboutPage";
import Layout from "./Components/surya/Layout/Layout";
import ConstructionPage from "./pages/ConstructionPage";
import StructuralPage from "./pages/StructuralPage";
import PortfolioPage from "./pages/PortfolioPage";
import CareerPage from "./pages/CareerPage";

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
      <div id='surya'>
        <Layout>
          <ScrollTopBtn />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route
              path="/services/construction"
              element={<ConstructionPage />}
            />
            <Route
              path="/services/structural-design"
              element={<StructuralPage />}
            /> */}
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/careers" element={<CareerPage />} />
            {/* <Route path="*" element={<Home />} /> */}
          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;

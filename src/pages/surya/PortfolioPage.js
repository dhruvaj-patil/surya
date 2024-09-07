import React from "react";
import Inventory from "../../Components/surya/Portfolio/Inventory";
import NumberBanner from "../../Components/surya/Portfolio/NumberBanner";
import bannerBg from "../../assets/img/page-banner.jpg";
import PageBanner from "../../Components/PageBanner";

function PortfolioPage() {
  return (
    <div id="portfolio">
      <PageBanner
        title="Portfolio"
        bannerBg={bannerBg}
        currentPage="portfolio"
      />
      <Inventory />
      <NumberBanner />
    </div>
  );
}

export default PortfolioPage;

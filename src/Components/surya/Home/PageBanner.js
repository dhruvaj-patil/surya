import React from "react";

function PageBanner() {
  return (
    <div
      className="page-banner-wrap bg-cover"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="page-heading text-white">
              <h1>{title}</h1>
            </div>
            <div className="breadcrumb-wrap">
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {currentPage}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageBanner;

import React from "react";
import inventoryData from "./inventoryData";
import img1 from "../../../assets/img/home4/t1.jpg";
import img2 from "../../../assets/img/home4/t2.jpg";
import img3 from "../../../assets/img/home4/t3.jpg";
import img4 from "../../../assets/img/home4/t4.jpg";

const Inventory = () => {
  return (
    <section className="team-wrapper circle-border fix section-bg section-padding">
      <div className="container">
        <div className="row mb-30">
          <div className="col-xl-6">
            <div className="section-title-4">
              <h1>Our Strength</h1>
            </div>
          </div>
          <div className="col-xl-6 mt-4 mt-xl-0">
            <p>
              As problem solvers, we leverage our diverse and cutting-edge
              machinery, affectionately known as '<b className="text-company">Shashtra</b>,’ to efficiently
              tackle complex projects. Our constantly evolving fleet and
              inventory are a testament to our commitment to safety and
              productivity.
            </p>
            {/* <div className="mt-20 d-flex align-items-center">
              <div className="member-faces">
                <div
                  className="single-face bg-cover"
                  style={{ backgroundImage: `url(${img1})` }}
                />
                <div
                  className="single-face bg-cover"
                  style={{ backgroundImage: `url(${img2})` }}
                />
                <div
                  className="single-face bg-cover"
                  style={{ backgroundImage: `url(${img3})` }}
                />
                <div
                  className="single-face bg-cover"
                  style={{ backgroundImage: `url(${img4})` }}
                />
              </div>
              <div className="our-more-member ml-30">
                <span>
                  More than 50k people Trust <br /> on our Experts
                </span>
              </div>
            </div> */}
          </div>
        </div>
        <div className="row">
          {inventoryData.map((data) => (
            <div className="col-lg-4 col-sm-6 col-xl-3" key={data.id}>
              <div
                className="single-team-member-3 bg-center bg-cover"
                style={{ backgroundImage: `url(${data.img})` }}
              >
                <div className="member-info-card">
                  <div className="content">
                    <h4>{data.name}</h4>
                    {/* <p>{data.designation}</p> */}
                    {/* <div className="social-profile">
                                            <a href={data.fb}><i className="fab fa-facebook-f"></i></a>
                                            <a href={data.twitter}><i className="fab fa-twitter"></i></a>
                                            <a href={data.insta}><i className="fab fa-instagram"></i></a>
                                            <a href={data.linkedIn}><i className="fab fa-linkedin"></i></a>
                                        </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inventory;

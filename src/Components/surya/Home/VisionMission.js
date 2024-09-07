import React from "react";
// import thumb3 from "../../assets/img/blog/b3.jpg";
import vision from "../../../assets/surya/vision_mission.svg";

function VisionMission() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6" id="vision_mission">
          <div className="block-contents">
            <div className="section-title">
              <span>Our Vision and Mission</span>
              <h2>Building long-term assets</h2>
            </div>
            <p>
              At SECPL, we integrate our clients into our team, ensuring every
              project is executed with honesty, integrity, and safety,
              prioritizing customer satisfaction above all. As engineers, we
              focus on building long-term assets that benefit our clients and
              the wider community.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <img src={vision} alt="Vision" />
        </div>
      </div>
    </div>
  );
}

export default VisionMission;

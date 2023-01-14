import React from "react";

import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100000827613862"target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://www.instagram.com/volodymyr_koziupa/"target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/volodymyr-koziupa-72087b173/"target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" />
              </a>
              
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Volodymyr Koziupa</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
               
              </h1>
            </span>
            <span className="profile-role-tagline">
            Junior Frontend Developer
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >Contact Me</button>
            <a href="Resume. Volodymyr Koziupa.pdf" download="Resume. Volodymyr Koziupa.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

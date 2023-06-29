import React from 'react'
import coadingVector from "../images/coadingVector.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFileArrowDown,
  faAddressCard,
  faBriefcase,
  faCode,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  return (
    <div>
      <div
        style={{
          background: "#001422",
          padding: "60px 6% 50px 6%",
          boxSizing:"border-box",
        }}
        id="about"
        class="nav-link projects">
        <h1 style={{ fontSize: "38px", textAlign: "center" }} class="about section">
          <FontAwesomeIcon icon={faBriefcase} size="sm" color="#007fda" />{" "}
          My Projects
        </h1>

        <div className="projectDiv">
          
        </div>
      </div>
    </div>
  )
}


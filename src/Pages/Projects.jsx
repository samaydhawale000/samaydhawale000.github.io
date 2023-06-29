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
          <FontAwesomeIcon icon={faAddressCard} size="sm" color="#007fda" />{" "}
          My Projects
        </h1>

        <div className="AboutDiv">
          <img src={coadingVector} alt="image" />
          <p id="user-detail-intro">
            A skilled software developer with expertise in HTML, CSS,
            JavaScript, and the MERN stack. Problem-solving, exceptional UX/UI
            skills, and a passion for innovation. A valuable asset to projects
            with strong teamwork abilities.
            <br />
            <br />
            Apart from coding, I have a passion for art and enjoy drawing in my free time. I also play a musical instrument as a creative outlet.
            <br />
            <br />
            Really passionate about coding and strongly interested in obtaining
            a software developer position to work on enhancing the product
            experience
          </p>
        </div>
      </div>
    </div>
  )
}


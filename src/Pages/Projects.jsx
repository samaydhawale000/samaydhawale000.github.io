import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from '../components/ProjectCard';
import techBazaar from "../images/techBazaarHome.png"
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
          <ProjectCard title={"TechBazaar"} img={techBazaar} discription={"TECHBAZAAR is an e-commerce website for tech related products, designed to provide a user experience."} />
          <ProjectCard title={"TechBazaar"} img={techBazaar} discription={"TECHBAZAAR is an e-commerce website for tech related products, designed to provide a user experience."} />
          <ProjectCard title={"TechBazaar"} img={techBazaar} discription={"TECHBAZAAR is an e-commerce website for tech related products, designed to provide a user experience."} />
          <ProjectCard title={"TechBazaar"} img={techBazaar} discription={"TECHBAZAAR is an e-commerce website for tech related products, designed to provide a user experience."} />
          <ProjectCard title={"TechBazaar"} img={techBazaar} discription={"TECHBAZAAR is an e-commerce website for tech related products, designed to provide a user experience."} />
          <ProjectCard title={"TechBazaar"} img={techBazaar} discription={"TECHBAZAAR is an e-commerce website for tech related products, designed to provide a user experience."} />
          
        </div>
      </div>
    </div>
  )
}


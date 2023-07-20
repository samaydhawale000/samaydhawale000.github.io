import React from "react";
import logo from "../images/logo.png";
import "./Components.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFileArrowDown,
  faAddressCard,
  faBriefcase,
  faCode,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ResumeBtn from "./ResumeBtn";

export default function NavBar() {
  return (
    <div id="nav-menu">
      <Link
          class="nav-link home"
          className="NavLink"
          to={"home"}
          spy={true}
          smooth={true}
          offset={-70}
          duration={600}
        >
          <img src={logo} alt="logo" style={{ width: "200px" }} />
        </Link>
      
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "800px",
          alignItems: "center",
        }}
      >
        <Link
          class="nav-link home"
          className="NavLink"
          to={"home"}
          spy={true}
          smooth={true}
          offset={-70}
          duration={600}
          
        >
          <FontAwesomeIcon icon={faHouse} size="sm" /> HOME
        </Link>
        <Link class="nav-link about" className="NavLink" to={"about"}  spy={true}
            smooth={true}
            offset={-70}
            duration={600}>
          <FontAwesomeIcon icon={faAddressCard} size="sm" /> ABOUT
        </Link>
        <Link class="nav-link skills" className="NavLink" to={"skills"}  spy={true}
            smooth={true}
            offset={-70}
            duration={600}>
          {" "}
          <FontAwesomeIcon icon={faCode} size="sm" /> SKILLS
        </Link>
        <Link class="nav-link projects" className="NavLink" to={"projects"}  spy={true}
            smooth={true}
            offset={-70}
            duration={600}>
          <FontAwesomeIcon icon={faBriefcase} size="sm" /> PROJECTS
        </Link>
        <Link className="NavLink" to={"github"}  spy={true}
            smooth={true}
            offset={-70}
            duration={600}>
          {" "}
          <FontAwesomeIcon icon={faGithub} /> GITHUB
        </Link>
        <Link class="nav-link contact" className="NavLink" to={"contact"}  spy={true}
            smooth={true}
            offset={-70}
            duration={600}>
          {" "}
          <FontAwesomeIcon icon={faPhoneVolume} size="sm" /> CONTACT
        </Link>
        <div id="resumeBtn" class="nav-link resume">
          <ResumeBtn  id="resume-button-2">
            Resume <FontAwesomeIcon icon={faFileArrowDown} />
          </ResumeBtn>
        </div>
      </div>
    </div>
  );
}

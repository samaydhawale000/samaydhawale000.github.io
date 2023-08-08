import React from "react";
import { faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFileArrowDown,
  faAddressCard,
  faBriefcase,
  faCode,
  faPhoneVolume,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import resume from "../Resume/resume.pdf"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import ResumeBtn from "./ResumeBtn";

export default function SideNav({setCls}) {

  return (
    <div >
      <div className="sideNavMainDiv">
        <div style={{background:"#00121c", display:"flex", justifyContent:"flex-end",padding: "18px 4% 18px 4%"}}>
          <button className="hamburger" onClick={setCls}>
          <FontAwesomeIcon icon={faXmark} size="xl" color="#fff" />
          </button>
        </div>


        <div style={{paddingLeft:"30px", marginTop:"30px",display:"flex", flexDirection:"column",justifyContent:"space-between", height:"250px"}}>

        <Link
          class="nav-link home"
          className="NavLink"
          to={"home"}
          spy={true}
          smooth={true}
          offset={-70}
          duration={600}
          onClick={setCls}
        >
          <FontAwesomeIcon icon={faHouse} size="sm" /> HOME
        </Link>
        

        <Link class="nav-link about" className="NavLink" to={"about"}  spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            onClick={setCls}>
          <FontAwesomeIcon icon={faAddressCard} size="sm" /> ABOUT
        </Link>

        <Link class="nav-link skills" className="NavLink" to={"skills"}  spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            onClick={setCls}>
          {" "}
          <FontAwesomeIcon icon={faCode} size="sm" /> SKILLS
        </Link>
        <Link class="nav-link projects" className="NavLink" to={"projects"}  spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            onClick={setCls}>
          <FontAwesomeIcon icon={faBriefcase} size="sm" /> PROJECTS
        </Link>
        <Link className="NavLink" to={"github"}  spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            onClick={setCls}>
          {" "}
          <FontAwesomeIcon icon={faGithub} /> GITHUB
        </Link>
        <Link class="nav-link contact" className="NavLink" to={"contact"}  spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            onClick={setCls}>
          {" "}
          <FontAwesomeIcon icon={faPhoneVolume} size="sm" /> CONTACT
        </Link>
        </div>


        <div id="resumeBtn" class="nav-link resume" style={{margin:"30px 0px 0px 65px" }}>

        <a href={resume} download="Samay-Dhawale-Resume" id="resume-link-1" style={{textDecoration:"none"}}>
        <ResumeBtn  id="resume-button-1">
            Resume <FontAwesomeIcon icon={faFileArrowDown} />
        </ResumeBtn>
       </a>  
        </div>
      </div>
    </div>
  );
}

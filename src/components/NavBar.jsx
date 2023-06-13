import React from 'react'
import logo from "../images/logo.png"
import './Components.css';
import Button from "./Button"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHouse,faFileArrowDown,faAddressCard,faBriefcase,faCode,faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
import { faGithub,} from '@fortawesome/free-brands-svg-icons'

export default function NavBar() {
  return (
    <div id="nav-menu">
        <img src={logo} alt="logo" style={{width:"200px"}}/>
        <div style={{display:"flex", justifyContent:"space-between", width:"60%", alignItems:"center"}}>
            <NavLink class="nav-link home" className="NavLink"><FontAwesomeIcon icon={faHouse} size="sm" /> HOME</NavLink>
            <NavLink class="nav-link about" className="NavLink"><FontAwesomeIcon icon={faAddressCard} size="sm" /> ABOUT</NavLink>
            <NavLink class="nav-link skills" className="NavLink"> <FontAwesomeIcon icon={faCode} size="sm" /> SKILLS</NavLink>
            <NavLink class="nav-link projects" className="NavLink"><FontAwesomeIcon icon={faBriefcase} size="sm" /> PROJECTS</NavLink>
            <NavLink class="nav-link contact" className="NavLink" > <FontAwesomeIcon icon={faGithub} /> GITHUB</NavLink>
            <NavLink class="navLink" className="NavLink"> <FontAwesomeIcon icon={faPhoneVolume} size="sm" />  CONTACT</NavLink>
          <div id="resumeBtn">
          <Button text={"Resume"} class="nav-link resume" icon={<FontAwesomeIcon icon={faFileArrowDown}/>}/>       
          </div>
        </div>
    </div>
  )
}


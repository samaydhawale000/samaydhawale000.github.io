import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import Skillcard from '../components/SkillCard';
import github from "../images/github.png"

export default function Skills() {
  return (
    <div id="skills">
 <div
        style={{
          padding: "60px 6% 50px 6%",
          boxSizing:"border-box"
        }}
        class="nav-link skills">
        <h1 style={{ fontSize: "38px", textAlign: "center", marginBottom:"50px" }} class="about section">
          <FontAwesomeIcon icon={faCode} size="sm" color="#007fda" />{"  "}
          Technical Skills
        </h1>

        <div className="SkillDiv">
          <Skillcard image="https://cdn.worldvectorlogo.com/logos/html-1.svg" heading={"HTML"}/>
          <Skillcard image="https://cdn.worldvectorlogo.com/logos/css-3.svg" heading={"CSS"}/>
          <Skillcard image="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" heading={"JavaScript"}/>
          <Skillcard image="https://cdn.worldvectorlogo.com/logos/react-2.svg" heading={"React"}/>
          <Skillcard image="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" heading={"Node JS"}/>
          <Skillcard image="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" heading={"Mongo DB"}/>
          <Skillcard image={github} heading={"Github"}/>
          <Skillcard image="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" heading={"Mongo DB"}/>
        </div>
      </div>
    </div>
  )
}

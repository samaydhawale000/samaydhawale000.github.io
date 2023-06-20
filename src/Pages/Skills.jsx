import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import Skillcard from '../components/SkillCard';
import github from "../images/github.png"
import express from "../images/express.png"

export default function Skills() {
  return (
    <div id="skills">
 <div
        style={{
          padding: "60px 6% 100px 6%",
          boxSizing:"border-box"
        }}
        class="nav-link skills">
        <h1 style={{ fontSize: "38px", textAlign: "center", marginBottom:"60px" }} >
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
          <Skillcard image={express} heading={"Express"}/>
          <Skillcard image={github} heading={"Github"}/>
          <Skillcard image="https://cdn.worldvectorlogo.com/logos/redux.svg" heading={"Redux"}/>
          <Skillcard image="https://cdn.worldvectorlogo.com/logos/typescript.svg" heading={"TypeScript"}/>
          <Skillcard image="https://www.svgrepo.com/show/354262/react-router.svg" heading={"React-Router"}/>
          <Skillcard image="https://cdn.worldvectorlogo.com/logos/npm-square-red-1.svg" heading={"NPM"}/>
          <Skillcard image="https://avatars.githubusercontent.com/u/54212428?s=280&v=4" heading={"Chakra UI"}/>
          <Skillcard image="https://figmafy.com/wp-content/uploads/2022/01/Group-21.png" heading={"Figma"}/>
        </div>
      </div>
    </div>
  )
}

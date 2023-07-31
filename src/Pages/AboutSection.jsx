import React from "react";
import coadingVector from "../images/coadingVector.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutSection() {
  return (
    <div id="about" >
      <div
        style={{
          background: "#001422",
          padding: "60px 6% 50px 6%",
          boxSizing:"border-box",
        }}
        className="nav-link about">
          
        <h1  id="about" className="about section pagesHeading">
          <FontAwesomeIcon icon={faAddressCard} size="sm" color="#007fda" />{" "}
          About Me
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
  );
}

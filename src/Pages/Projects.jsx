import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "../components/ProjectCard";
import techBazaar from "../images/techBazaarHome.png";
import tech1 from "../images/tech1.png";
import tech2 from "../images/tech2.png";
import tech3 from "../images/tech3.png";
import tech4 from "../images/tech4.png";
import downhill from "../images/downhill.png";
import downhill1 from "../images/downhill1.png";
import downhill2 from "../images/downhill2.png";
import downhill3 from "../images/downhill3.png";
import downhill4 from "../images/downhill4.png";
import downhill5 from "../images/downhill5.png";
import stylio from "../images/stylio.png";
import stylio1 from "../images/stylio1.png";
import stylio2 from "../images/stylio2.png";
import stylio3 from "../images/stylio3.png";
import stylio4 from "../images/stylio4.png";
import stylio5 from "../images/stylio5.png";
import stylio6 from "../images/stylio6.png";
import stylio7 from "../images/stylio7.png";
import stylio8 from "../images/stylio8.png";
import sd from "../images/sd.png";
import sd1 from "../images/sd1.png";
import sd2 from "../images/sd2.png";
import sd3 from "../images/sd3.png";
import portfolio1 from "../images/portfolio1.png";
import portfolio3 from "../images/portfolio3.png";
import portfolio4 from "../images/portfolio4.png";

import {
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";


export default function Projects() {
  return (
    <div>
      <div
        style={{
          background: "#001422",
          padding: "60px 6% 50px 6%",
          boxSizing: "border-box",
        }}
        id="projects"
        class="nav-link projects"
      >
        <h1
          style={{ fontSize: "38px", textAlign: "center" }}
          class="about section"
        >
          <FontAwesomeIcon icon={faBriefcase} size="sm" color="#007fda" /> My
          Projects
        </h1>

        <div className="projectDiv">
          <ProjectCard
            webpath={"https://techbazar-app.vercel.app/"}
            gitpath={
              "https://github.com/samaydhawale000/Techbazar_Project_Unit-5"
            }
            tech={"React js | CSS | JavaScript | Chakra UI | Json Server"}
            title={"TechBazaar"}
            img={[techBazaar, tech1, tech3, tech4, tech2]}
            discription={
              "TECHBAZAAR is an e-commerce website for tech related products, designed to provide a user experience."
            }
          />
          <ProjectCard
            webpath={"https://downhill.netlify.app"}
            gitpath={
              "https://github.com/samaydhawale000/Downhill_Project_Unit-4"
            }
            tech={"React js | CSS | JavaScript | Chakra UI | Json Server"}
            title={"Downhill"}
            img={[
              downhill,
              downhill1,
              downhill2,
              downhill3,
              downhill4,
              downhill5,
            ]}
            discription={
              "Downhill is an e-commerce site for skateboard products, designed with a focus on providing a great user experience."
            }
          />
          <ProjectCard
            webpath={"https://stylio.netlify.app/index.html"}
            gitpath={
              "https://github.com/samaydhawale000/Stylio.com_Project_Unit-3"
            }
            tech={"JavaScript | CSS | HTML | Json Server"}
            title={"Stylio"}
            img={[
              stylio,
              stylio1,
              stylio2,
              stylio3,
              stylio4,
              stylio5,
              stylio6,
              stylio7,
              stylio8,
            ]}
            discription={
              "Stylio.com is an e-commerce clothing website inspired by Ajio.com, designed to provide an easy and seamless shopping experience."
            }
          />
          <ProjectCard
            webpath={"https://sd-pharma.netlify.app"}
            gitpath={
              "https://github.com/samaydhawale000/SD_Pharma_Project_Unit-2"
            }
            tech={"JavaScript | CSS | HTML | Json Server"}
            title={"SD Pharma"}
            img={[sd, sd1, sd2, sd3]}
            discription={
              "SD Pharma is an e-commerce website sells all products related to medical which inspired by PharmEasy"
            }
          />
          <ProjectCard
            webpath={"samaydhawale000.github.io/"}
            gitpath={
              "https://github.com/samaydhawale000/samaydhawale000.github.io"
            }
            tech={"React js | CSS | JavaScript | Chakra UI"}
            title={"My Portfolio"}
            img={[portfolio1, portfolio3, portfolio4]}
            discription={
              "This portfolio website demonstrates my impressive work and features, a fully responsive website and build from scratch. it showcases my skills effectively."
            }
          />
          <ProjectCard
            webpath={"samaydhawale000.github.io/"}
            gitpath={
              "https://github.com/samaydhawale000/samaydhawale000.github.io"
            }
            tech={"React js | CSS | JavaScript | Chakra UI | NodeJS | MongoDB | ExpressJS"}
            title={"MusicMix"}
            img={[techBazaar, tech1, tech3, tech4, tech2]}
            discription={
              "MusicMix is an impressive Spotify clone, designed to offer a great user experience and Awesome Music Experiences for users."
            }
          />
        </div>
      </div>
    </div>
  );
}

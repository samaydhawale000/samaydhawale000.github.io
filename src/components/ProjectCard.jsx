import React, { useEffect,useState} from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faSquareUpRight
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default function ProjectCard({ title, img, discription,tech,gitpath,webpath }) {
const [image,setImage] = useState(img[0])

  useEffect(()=>{
    let i=0
    const interval = setInterval(()=>{
      if(i==img.length-1){
        i=0
      }
      else{
        i++
      }
      setImage(img[i])
      console.log(image)
    },2000)

    return () => {
      clearInterval(interval);
    };
  },[])

  return (
    <div class="project-card">
      <img src={image} alt="image" />
      <div>
        <h2 class="project-title">{title}</h2>
        <p class="project-description">{discription}</p>
        <p  class="project-tech-stack"><span style={{color:"#007fda", fontWeight:"bold"}}>Tech stack:</span> {tech}</p>
        <div className="btnDiv">
          
          <Link to={gitpath} target="_blank"  style={{textDecoration:"none"}} class="project-github-link" >
          <Button text={"Gitbub"} icon={<FontAwesomeIcon icon={faGithub} size="md" />}/>
          </Link>
          <Link to={webpath} target="_blank"  style={{textDecoration:"none"}} class="project-deployed-link">
          <Button text={"Go Live"} icon={<FontAwesomeIcon icon={faSquareUpRight} size="md" />}/>
          </Link>
        </div>
      </div>
    </div>
  );
}

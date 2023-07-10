import React, { useEffect,useState} from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faSquareUpRight
} from "@fortawesome/free-solid-svg-icons";


export default function ProjectCard({ title, img, discription }) {
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
        <div className="btnDiv">
          <Button text={"Gitbub"} icon={<FontAwesomeIcon icon={faGithub} size="md" />}/>
          <Button text={"Go Live"} icon={<FontAwesomeIcon icon={faSquareUpRight} size="md" />}/>
        </div>
      </div>
    </div>
  );
}

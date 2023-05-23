import React from 'react'
import samayImage from "../images/SamayImage.png"
import "./Pages.css"

function Home() {
  return (
    <div style={{display:"flex", justifyContent:"space-between", margin:"100px"}}>
        <h1>Samay</h1>
        <img className="SamayImage"  src={samayImage} alt="image" />
    </div>
  )
}

export default Home
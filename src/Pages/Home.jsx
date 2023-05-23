import React from 'react'
import samayImage2 from "../images/samayImage2.png"
import "./Pages.css"

function Home() {
  return (
    <div style={{display:"flex", justifyContent:"space-between", margin:"50px 100px 50px 100px "}}>
        <h1>Samay</h1>
    
        <img className="SamayImage"  src={samayImage2} alt="image" />
   
        
    </div>
  )
}

export default Home
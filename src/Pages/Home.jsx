import React from 'react'
import samayImage2 from "../images/samayImage2.png"
import "./Pages.css"
import background from "../images/background.png"
import Button from '../components/Button'

function Home() {
 
  return (
    <div style={{width:"100%"}}>
      <img className='bgImage' src={background} alt='bgImage' style={{width:"100%"}} />
 <div  style={{display:"flex", justifyContent:"space-between", margin:"-38% 60px 50px 100px",}}>
       
       <div style={{marginTop:"30px"}}>
        <h1>Hello👋, My name is</h1>
        <h1 id='myName'>Samay Subodh Dhawale</h1>
        <div style={{display:"flex", width:"80%", justifyContent:"space-between", alignItems:"baseline"}}>
        <h1>I am a</h1>
        <h1 data-text="Full Stack Web Developer" id="designation">Full Stack Web Developer</h1>
        </div>
       <Button text={"Resume"}/> 
       </div>
    
        <img className="SamayImage"  src={samayImage2} alt="image" />
    </div>
    </div>
   
  )
}

export default Home
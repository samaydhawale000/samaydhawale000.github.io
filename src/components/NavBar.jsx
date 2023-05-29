import React from 'react'
import logo from "../images/logo.png"
import './Components.css';

export default function NavBar() {
  return (
    <div className='navbar' id="nav-menu">
        <img src={logo} alt="" style={{width:"200px"}}/>
        <div style={{display:"flex", justifyContent:"space-between", width:"40%"}}>
            <h3>Home</h3>
            <h3>Home</h3>
            <h3>Home</h3>
            <h3>Home</h3>
            <h3>Home</h3>
        </div>
    </div>
  )
}


import React from 'react'

export default function Skillcard({image,heading}) {
  return (
    <div class="skills-card">
        <img src={image} alt="image" class="skills-card-img"/>
        <h3 class="skills-card-name">{heading}</h3>
    </div>
  )
}

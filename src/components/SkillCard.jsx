import React from 'react'

export default function Skillcard({image,heading}) {
  return (
    <div className='skillcard'>
        <img src={image} alt="image" />
        <h3>{heading}</h3>
    </div>
  )
}

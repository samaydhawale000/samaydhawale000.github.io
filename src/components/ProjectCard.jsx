import React from 'react'

export default function ProjectCard({title,img,discription}) {
  return (
    <div className='productCardDiv'>
      <img src={img} alt="image" />
      <div>
      <h2>{title}</h2>
      <p>{discription}</p>
      </div>
     
    </div>
  )
}

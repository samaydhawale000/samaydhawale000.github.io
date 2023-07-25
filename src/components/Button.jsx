import React from 'react'

export default function Button({text,icon}) {
  return (
    <div>
   <button className='btn'>{text} {icon}</button>
    </div>
  )
}

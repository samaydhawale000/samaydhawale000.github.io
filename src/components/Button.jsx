import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileArrowDown} from '@fortawesome/free-solid-svg-icons'

export default function Button({text}) {
  return (
    <div>
   <button id='btn'>{text} <FontAwesomeIcon icon={faFileArrowDown}/></button>
    </div>
  )
}

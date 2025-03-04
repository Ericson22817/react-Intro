import React from 'react'
import { FaPlus } from "react-icons/fa6";
import style from './dropdown.module.css'

const Dropdown = ({query}) => {
  return (
    
    <div className={style.dropdown}>
            
      <div className={style.faqquery}>
        <p>
          {query}
        </p>
        <FaPlus />
      </div>

    </div>
  )
}

export default Dropdown
import React from 'react'
import Logo from "../../assets/images/logo.png"
import Buttons from "../buttons"
import styles from "./header.module.css"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logoCtn}>
            <img src={Logo} alt="" />
        </div>

        <div className={styles.btnCtn}>
            <select>
                <option value="english">English</option>
                <option value="chinese">中文</option>
            </select>

            <Link to="/login">
              <Buttons label="Sign In" />
            </Link>
        </div>

    </div>
  )
}

export default Header
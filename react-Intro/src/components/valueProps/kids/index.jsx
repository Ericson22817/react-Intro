import React from "react";
import styles from "./kids.module.css";


const Kids=({text , image , paragraph , reverse}) =>{
    
    return(

        <>
        <div className={ reverse ? `${styles.box} ${styles.reverse}`:`${styles.box}`}>
      {image}  <img  className={styles.img} src="../src/assets/images/kiddies.png" alt="kids" />

      <div className={styles.texts}>
        <h1 className={styles.info}>{text}</h1>
        <p className={styles.line}>{paragraph}</p>
      </div>
    </div>
        </>

    )
    

}
export default Kids;
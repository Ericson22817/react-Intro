import React from "react";
import styles from "./FAQs.module.css"


function Faqs({Faq}) {
  return (
    <div className={styles.FaqDiv} >
        {/* <h1 className="faqHeader">Frequently Asked Question</h1> */}


    
        <div className={styles.faq} onClick={()=> setDisplayResponse(!setDisplayResponse)}>
          
          <p>{Faq}</p>

        </div>
        {displayResponse &&(
          <div className={styles.Faq}>
            <P>
              {response}
            </P>
          </div>
        )}


    
        
       
       
       
       
       
       
       
       
       
       
       
       
        {/* <div>
          <p>what is netflix</p>
        </div>

        <div>
          <p>How much does netflix cost</p>
        </div>

        <div>
              <p>Where can i watch</p>
        </div>

        <div>
          <p> </p>
        </div>
         */}

    </div>
  )
}

export default Faqs
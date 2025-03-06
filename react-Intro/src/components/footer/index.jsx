import React from 'react'
import styles from "./footer.module.css"

function Footer() {
  return (
    <div>
           <p className={styles.call}>Questions? Call 1-844-505-2993</p> 


<div className={styles.foot}>
        
        <div>
        <p>FAQ</p>
<p> Investor Relations</p>
<p>Ways to Watch</p>
<p>Corporate Information</p>
<p>Only on Netflix</p>
        </div>

<div>
<p> Help Center</p>
<p>Jobs</p>
<p>Terms of Use</p>
<p>Contact Us</p>
</div>

<div>
<p> Account</p>
<p>Redeem Gift Cards</p>
<p>Privacy</p>
<p>Speed Test</p>
</div>

<div>
<p> Media Center</p>
<p>Buy Gift Cards</p>
<p> Cookie Preferences</p>
<p>Legal Notices</p>

</div>

    </div>

    <div className={styles.select}>
<select>
                <option value="english">English</option>
                <option value="chinese">中文</option>
            </select>
</div>

<p className={styles.last}>Netflix India</p>
    </div>
  )
}

export default Footer;
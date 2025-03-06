import React from 'react'
import styles from './loginForm.module.css'
import Logo from '../../assets/images/logo.png'
import Hero from '../../assets/images/heroBg.png'


const LoginForm = () => {
  return (
    
    <>
    
 <div className={styles.logoCtn}>
<img src={Logo} alt="" />

</div> 

<div className={styles.formdiv}>
    <div className={styles.formCtn}>


<form action="">

<h3>Sign In</h3>

    <div>
    <input type="email number" name="" id="" placeholder='Email or Phone Number'/>
    </div>
    <div>
    <input type="password" name="" id="" placeholder='Password'/>
    </div>

<button className={styles.secondaryBtn}>Sign in</button>

<p>Remember me<span>Need help?</span></p>


</form>

<div>
<p>Login with Facebook </p>
</div>

<div>
<p>New to Netflix? <span>Sign up now</span></p>
</div>

<div>
<p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <link rel="stylesheet" href="https://netflix.com/" />Learn more.</p>
</div>

    </div>

</div>

    <footer className={styles.foot}>


<div>
<p> FAQ Center</p>
<p>Cookie Preferences</p>
</div>

<div>
<p> Help Center</p>
<p>Corporate Information</p>
</div>

<div>
<p> Terms of Use</p>
</div>

<div>
<p>Privacy</p>
</div>
    </footer>

    </>

  )
}

export default LoginForm
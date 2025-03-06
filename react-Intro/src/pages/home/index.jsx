import React from "react";
import styles from "./home.module.css";
import Header from "../../components/header";
import InputComponent from "../../components/inputComponent";
import ValuePropCard from "../../components/valueProps";
import Line from "../../components/line";
import Faqs from "../../components/FAQs";
import Footer  from "../../components/footer";


function Home() {
  return (
    <>
      <div className={styles.heroSection}>
        <Header />
        <div className={styles.textCtn}>
          <div>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
          </div>

          <InputComponent />
        </div>

        <section>
          <Line/>
          <ValuePropCard
            heading="Enjoy on your TV"
            description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
          />
          <Line/>
          <ValuePropCard
            heading="Download your shows to watch offline"
            description="Save your favorites easily and always have something to watch."
            reverse
          />
          <Line/>
          <ValuePropCard
            heading="Watch everywhere"
            description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
          />
          <Line/>
          <ValuePropCard
            heading="Create profile for your kids"
            description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
            reverse
          />
        </section>

        <section className={styles.faqsection}>

        <h2 className={styles.qs}>Frequently Asked Question</h2>

    
          <Faqs Faq="what is Netflix?"/>
          <Faqs Faq="How much does Netflix cost?"/>
          <Faqs Faq="where can i watch?"/>
          <Faqs Faq="How do i cancel?"/>
          <Faqs Faq="What can i watch on Netflix?"/>
          <Faqs Faq="Is Netflix good for kids?"/>


        <div className={styles.input}>
        <InputComponent/>
          </div>  

          
          

          

        </section>
        <line/>
      
      <footer className={styles.foot}>
        <Footer/>

      </footer>
      </div>
    </>
  );
}

export default Home;

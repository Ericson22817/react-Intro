import React from "react";
import styles from "./home.module.css";
import Header from "../../components/header";
import InputComponent from "../../components/inputComponent";
import ValuePropCard from "../../components/valueProps";
import Image1 from "../../assets/images/box1-image.png";
import Image2 from "../../assets/images/strangerBoy.png";
import Image3 from "../../assets/images/kidImage.png";
import Dropdown from "../../components/dropdown";
import Footer from "../../components/footer";
import { faqs } from "./data";

// const faqs = [
//   {
//     query: "E mi lokan",
//     response: "hmmmm, Obi???"
//   },
//   {
//     query: "Who be human being?",
//     response: "Commot me from human being"
//   },
//   {
//     query: "What is Netflix?",
//     response: "talk to youur papa"
//   },
//   {
//     query: "What is Netflix?",
//     response: "talk to youur papa"
//   },
//   {
//     query: "What is Netflix?",
//     response: "talk to youur papa"
//   }
// ]

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
          <ValuePropCard
            heading="Enjoy on your TV"
            description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
            imgUrl={Image1}
          />
          <ValuePropCard
            heading="Download your shows to watch offline"
            description="Save your favorites easily and always have something to watch."
            reverse
            imgUrl={Image2}
          />
          <ValuePropCard
            heading="Watch everywhere"
            description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
            imgUrl={Image1}
          />
          <ValuePropCard
            heading="Create profile for your kids"
            description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
            reverse
            imgUrl={Image3}
          />
        </section>

        <section className={styles.faqsection}>
          <h1>Frequently Asked Questions</h1>

          {faqs.map((questions, index) => (
            <Dropdown query={questions.query} key={index}/>
          ))}
        </section>

        <div className={styles.input}>
          <InputComponent />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;

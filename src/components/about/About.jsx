import "./About.css";
import { motion } from "framer-motion";
import SEO from "../SEO";

// Replace with your own image
import profile from "../../assets/images/appa2.png";

function About() {
  return (
    <section className="about-page">
      <div className="about-container">

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={profile} alt="Ayyappa" />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="about-tag">About Me</span>

          <h1>Hello, I'm Ayyappa 👋</h1>

          <p>
            I'm a passionate mobile photographer and Frontend Developer from
            India. I believe every moment has a story waiting to be captured.
            Through my phone lens, I enjoy photographing landscapes, nature,
            streets, sunsets, and everyday life.
          </p>

          <p>
            Apart from photography, I build modern web applications using React,
            JavaScript, HTML, CSS, and Node.js. Photography allows me to express
            creativity, while software development lets me transform ideas into
            reality.
          </p>

          <div className="about-stats">
            <div>
              <h2>500+</h2>
              <span>Photos Captured</span>
            </div>

            <div>
              <h2>5+</h2>
              <span>Years of Photography</span>
            </div>

            <div>
              <h2>3+</h2>
              <span>Years as Developer</span>
            </div>
          </div>

          <button className="about-btn">
            View My Journey
          </button>

        </motion.div>

      </div>
    </section>
  );
}

export default About;
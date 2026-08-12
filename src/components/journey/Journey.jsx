import "./Journey.css";
import { motion } from "framer-motion";
import SEO from "../SEO";
import {
  FaCode,
  FaReact,
  FaMobileAlt,
  FaLaptopCode,
  FaCamera,
} from "react-icons/fa";

const JOURNEY = [
  {
    year: "2022",
    title: "Started My Professional Journey",
    icon: <FaCode />,
    description:
      "Started my professional journey as a Frontend Developer and built a strong foundation in modern web development.",
  },
  {
    year: "2023",
    title: "Frontend Development",
    icon: <FaReact />,
    description:
      "Strengthened my skills in React, JavaScript, HTML, CSS and responsive user interface development.",
  },
  {
    year: "2024",
    title: "Web & Mobile Development",
    icon: <FaMobileAlt />,
    description:
      "Expanded my experience across web and mobile applications using React and React Native.",
  },
  {
    year: "2025",
    title: "Real-World Applications",
    icon: <FaLaptopCode />,
    description:
      "Worked with APIs, state management, debugging, deployment and building better user experiences.",
  },
  {
    year: "2026",
    title: "3+ Years Experience",
    icon: <FaCode />,
    description:
      "Reached 3 years of professional frontend development experience and continued growing as a developer.",
  },
  {
    year: "Beyond",
    title: "Code & Creativity",
    icon: <FaCamera />,
    description:
      "Combining software development with photography and personal creative projects.",
  },
];

function Journey() {
  return (
    <>
          <SEO
        title="Ayyappa's Photography & Developer Journey"
        description="Explore Ayyappa's professional journey as a Frontend Developer, working with React, React Native, web applications and creative photography."
        canonical="/journey"
      />
       <section className="journey-page">

      {/* =================================
          HEADER
      ================================= */}
      <motion.div
        className="journey-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="journey-tag">
          MY JOURNEY
        </span>

        <h1>
          My <span>Professional Journey</span>
        </h1>

        <p>
          A timeline of my growth, learning and experiences
          as a frontend developer.
        </p>
      </motion.div>


      {/* =================================
          HORIZONTAL TIMELINE
      ================================= */}
      <div className="journey-timeline-wrapper">

        <div className="journey-timeline">

          {/* Timeline line */}
          <div className="timeline-line"></div>

          {JOURNEY.map((item, index) => (
            <motion.div
              className="journey-item"
              key={item.year}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >

              {/* Year */}
              <div className="journey-year">
                {item.year}
              </div>


              {/* Timeline point */}
              <div className="journey-point">

                <div className="journey-dot">
                  {item.icon}
                </div>

              </div>


              {/* Card */}
              <div className="journey-card">

                <h2>
                  {item.title}
                </h2>

                <p>
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>


      {/* =================================
          EXPERIENCE SUMMARY
      ================================= */}
      <motion.div
        className="journey-summary"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
      >

        <div className="summary-item">
          <h2>3+</h2>
          <span>Years Experience</span>
        </div>

        <div className="summary-item">
          <h2>React</h2>
          <span>Frontend Development</span>
        </div>

        <div className="summary-item">
          <h2>Web + Mobile</h2>
          <span>Development</span>
        </div>

      </motion.div>

    </section>
    </>
 
  );
}

export default Journey;
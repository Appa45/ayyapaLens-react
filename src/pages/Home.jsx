import {
  FaArrowDown,
  FaPlay,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./Home.css";

// Plant image
import plantImage from "../assets/images/plant.gif";

function Home() {
  const navigate = useNavigate();

  const [lightOn, setLightOn] = useState(false);

  return (
    <section className="hero">

      {/* =====================================
          DARK OVERLAY
      ===================================== */}
      <div className="overlay"></div>


      {/* =====================================
          HERO CONTENT
      ===================================== */}
      <div className="hero-content">

        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          THROUGH
          <br />
          MY <span>PHONE</span> LENS
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
          }}
        >
          Every Day. One Pocket. One Lens.
        </motion.p>


        {/* Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.7,
          }}
        >
          <button
            className="primary-btn"
            onClick={() => navigate("/gallery")}
          >
            Explore Gallery
          </button>

          <button className="secondary-btn">
            <FaPlay />
            Watch Reel
          </button>
        </motion.div>

      </div>


      {/* =====================================
          HANGING BULB + PLANT + TABLE
          Desktop only
      ===================================== */}
      <motion.div
        className={`hanging-scene ${
          lightOn ? "light-on" : ""
        }`}
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.2,
          delay: 1,
        }}
      >

        {/* Light glow */}
        <div className="light-glow"></div>


        {/* Light rays */}
        <div className="light-rays"></div>


        {/* Bulb wire */}
        <div className="bulb-wire"></div>


        {/* Hanging bulb */}
        <button
          className="hanging-bulb"
          onClick={() => setLightOn((prev) => !prev)}
          aria-label={
            lightOn
              ? "Turn light off"
              : "Turn light on"
          }
        >
          <div className="bulb-holder"></div>

          <div className="bulb-glass">
            <div className="bulb-filament"></div>
          </div>
        </button>


        {/* Plant */}
        <motion.div
          className="plant"
          animate={{
            y: lightOn ? [0, -3, 0] : 0,
            scale: lightOn ? [1, 1.02, 1] : 1,
          }}
          transition={{
            duration: 3,
            repeat: lightOn ? Infinity : 0,
            ease: "easeInOut",
          }}
        >
          <img
            src={plantImage}
            alt="Plant"
          />
        </motion.div>


        {/* Table */}
        <div className="scene-table">
          <div className="table-surface"></div>

          <div className="table-front"></div>

          <div className="table-leg table-leg-left"></div>

          <div className="table-leg table-leg-right"></div>
        </div>


        {/* Bulb hint */}
        <motion.div
          className="bulb-hint"
          animate={{
            opacity: lightOn
              ? 0
              : [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: lightOn ? 0 : Infinity,
          }}
        >
          Click the bulb
        </motion.div>

      </motion.div>


      {/* =====================================
          SCROLL INDICATOR
      ===================================== */}
      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <FaArrowDown />
        <span>Scroll Down</span>
      </motion.div>

    </section>
  );
}

export default Home;
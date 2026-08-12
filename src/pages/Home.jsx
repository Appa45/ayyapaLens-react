import {
  FaArrowDown,
  FaCamera,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import SEO from "../components/SEO";

import "./Home.css";

// Profile images
import appaImage from "../assets/images/appa2.png";
import appaHoverImage from "../assets/images/appa1.png";


function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <SEO
        title="Ayyappa Lens | Phone Photography"
        description="Ayyappa Lens showcases phone photography, nature, travel and creative moments captured through a mobile phone lens."
        canonical="/"
      />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        {/* Dark overlay */}

        <div className="overlay"></div>


        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div className="hero-content">

          <motion.h1
            initial={{
              y: 80,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
          >
            THROUGH
            <br />
            MY <span>PHONE</span> LENS
          </motion.h1>


          <motion.p
            initial={{
              y: 40,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
          >
            Every Day. One Pocket. One Lens.
          </motion.p>


          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            className="hero-buttons"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
              duration: 0.7,
            }}
          >

            <button
              className="primary-btn"
              type="button"
              onClick={() => navigate("/gallery")}
            >
              Explore Gallery
            </button>


            <button
              className="secondary-btn"
              type="button"
            >
              Watch Reel
            </button>

          </motion.div>

        </div>


        {/* =================================================
            FLOATING PHOTO SCENE
        ================================================= */}

        <motion.div
          className="floating-photo-scene"

          initial={{
            opacity: 0,
            x: 120,
            scale: 0.85,
          }}

          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}

          transition={{
            duration: 1.2,
            delay: 0.8,
            ease: "easeOut",
          }}
        >


          {/* =================================================
              BACK PHOTO
          ================================================= */}

          <motion.div
            className="photo-card photo-card-back"

            animate={{
              y: [0, -10, 0],
              rotate: [-8, -6, -8],
            }}

            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <img
              src={appaImage}
              alt=""
            />

          </motion.div>


          {/* =================================================
              MIDDLE PHOTO
          ================================================= */}

          <motion.div
            className="photo-card photo-card-middle"

            animate={{
              y: [0, 12, 0],
              rotate: [7, 9, 7],
            }}

            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >

            <img
              src={appaHoverImage}
              alt=""
            />

          </motion.div>


          {/* =================================================
              MAIN PHOTO
          ================================================= */}

          <motion.div
            className="photo-card photo-card-main"

            animate={{
              y: [0, -12, 0],
              rotate: [2, 4, 2],
            }}

            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            {/* Photo header */}

            <div className="photo-card-header">

              <div className="camera-circle">
                <FaCamera />
              </div>

              <span>
                AYYAPPA LENS
              </span>

            </div>


            {/* =================================================
                MAIN IMAGE + HOVER IMAGE
            ================================================= */}

            <div className="main-photo">

              {/* Default image */}

              <img
                className="photo-image photo-image-default"
                src={appaImage}
                alt="Ayyappa Lens"
              />


              {/* Hover image */}

              <img
                className="photo-image photo-image-hover"
                src={appaHoverImage}
                alt="Ayyappa Lens"
              />


              {/* Shine effect */}

              <div className="photo-shine"></div>

            </div>


            {/* Photo footer */}

            <div className="photo-card-footer">

              <span>
                Through My Phone Lens
              </span>

              <span className="photo-date">
                2026
              </span>

            </div>

          </motion.div>


          {/* =================================================
              FLOATING CAMERA
          ================================================= */}

          <motion.div
            className="floating-camera-icon"

            animate={{
              y: [0, -8, 0],
              rotate: [0, 5, 0],
            }}

            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaCamera />
          </motion.div>


          {/* =================================================
              DECORATIVE DOT ONE
          ================================================= */}

          <motion.span
            className="photo-dot dot-one"

            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 1, 0.4],
            }}

            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          />


          {/* =================================================
              DECORATIVE DOT TWO
          ================================================= */}

          <motion.span
            className="photo-dot dot-two"

            animate={{
              y: [0, 10, 0],
              opacity: [0.3, 0.9, 0.3],
            }}

            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

        </motion.div>


        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

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

          <span>
            Scroll Down
          </span>

        </motion.div>

      </section>
    </>
  );
}


export default Home;
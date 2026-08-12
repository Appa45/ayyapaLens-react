import "./imagesLoader.css";
import { FaCamera } from "react-icons/fa";
import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="loader">

      {/* Camera Flash */}
      <motion.div
        className="flash"
        animate={{
          opacity: [0, 0.8, 0],
          scale: [0.8, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />


      {/* Loader Content */}
      <div className="loader-content">

        {/* Camera */}
        <motion.div
          className="camera-wrapper"
          animate={{
            y: [0, -8, 0],
            rotate: [-3, 3, -3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <motion.div
            className="camera-ring"
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaCamera className="camera" />
          </motion.div>

        </motion.div>


        {/* Title */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          THROUGH MY <span>PHONE</span> LENS
        </motion.h1>


        {/* Tagline */}
        <motion.p
          className="loader-tagline"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          Capturing moments...
        </motion.p>


        {/* Loading dots */}
        <div className="loading-dots">

          {[0, 1, 2, 3].map((index) => (
            <motion.span
              key={index}
              animate={{
                y: [0, -8, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.15,
              }}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default Loader;
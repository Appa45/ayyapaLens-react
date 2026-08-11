import "./Gallery.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const PHOTOS = [
  {
    src: "https://res.cloudinary.com/ds5tpnjy4/image/upload/w_1200,q_auto,f_auto/v1781064834/IMG20200715151056-01_krgpk8.jpg",
    title: "Golden Morning",
    date: "2020.07.15",
  },
  {
    src: "https://res.cloudinary.com/ds5tpnjy4/image/upload/w_1200,q_auto,f_auto/v1781064834/IMG20210607171902-01_w3vcby.jpg",
    title: "Nature",
    date: "2021.06.07",
  },
  {
    src: "https://res.cloudinary.com/ds5tpnjy4/image/upload/w_1200,q_auto,f_auto/v1781064834/IMG20181027095908_vqxxi7.jpg",
    title: "Landscape",
    date: "2018.10.27",
  },
  {
    src: "https://res.cloudinary.com/ds5tpnjy4/image/upload/w_1200,q_auto,f_auto/v1781064833/IMG20200723122656-01-01_hdauor.jpg",
    title: "Travel",
    date: "2020.07.23",
  },
  {
    src: "https://res.cloudinary.com/ds5tpnjy4/image/upload/w_1200,q_auto,f_auto/v1781064832/IMG20200824071140-01_popnqu.jpg",
    title: "Sunrise",
    date: "2020.08.24",
  },
  {
    src: "https://res.cloudinary.com/ds5tpnjy4/image/upload/w_1200,q_auto,f_auto/v1781064832/IMG20200818151246-01_zwbipa.jpg",
    title: "Reflection",
    date: "2020.08.18",
  },
  {
    src: "https://res.cloudinary.com/ds5tpnjy4/image/upload/w_1200,q_auto,f_auto/v1781064771/IMG20201120065632-01_jqy4bx.jpg",
    title: "Clouds",
    date: "2020.11.20",
  },
  {
    src: "https://res.cloudinary.com/ds5tpnjy4/image/upload/w_1200,q_auto,f_auto/v1781064832/IMG20200817100722-01_1_pkqqiu.jpg",
    title: "Flowers",
    date: "2020.08.17",
  },
  {
    src: "https://res.cloudinary.com/ds5tpnjy4/image/upload/w_1200,q_auto,f_auto/v1781064832/IMG20200807075913-01_jn91ol.jpg",
    title: "Green Valley",
    date: "2020.08.07",
  },
  {
    src: "https://res.cloudinary.com/ds5tpnjy4/image/upload/w_1200,q_auto,f_auto/v1781064832/IMG_20200727_173301_698_te6ib3.jpg",
    title: "Road",
    date: "2020.07.27",
  },
  {
    src: "https://res.cloudinary.com/ds5tpnjy4/image/upload/w_1200,q_auto,f_auto/v1781064834/IMG20200723134406-01_svcikl.jpg",
    title: "Sunset",
    date: "2020.07.23",
  },
];

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedPhoto =
    selectedIndex !== null ? PHOTOS[selectedIndex] : null;

  /* ================================
     OPEN IMAGE
  ================================= */

  const openViewer = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  /* ================================
     CLOSE IMAGE
  ================================= */

  const closeViewer = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  };

  /* ================================
     NEXT IMAGE
  ================================= */

  const nextImage = (e) => {
    e?.stopPropagation();

    setSelectedIndex((current) => {
      if (current === null) return null;

      return (current + 1) % PHOTOS.length;
    });
  };

  /* ================================
     PREVIOUS IMAGE
  ================================= */

  const previousImage = (e) => {
    e?.stopPropagation();

    setSelectedIndex((current) => {
      if (current === null) return null;

      return (
        (current - 1 + PHOTOS.length) %
        PHOTOS.length
      );
    });
  };

  /* ================================
     KEYBOARD CONTROLS
  ================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        closeViewer();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedIndex]);

  /* Restore body scroll when component unmounts */

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <section className="gallery-page">

      {/* =================================
          HEADER
      ================================= */}

      <motion.div
        className="gallery-header"
        initial={{
          opacity: 0,
          y: -40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <h1>Gallery</h1>

        <p>
          Moments captured through my phone lens.
        </p>
      </motion.div>


      {/* =================================
          IMAGE GRID
      ================================= */}

      <div className="gallery-grid">

        {PHOTOS.map((photo, index) => (
          <motion.div
            className="gallery-card"
            key={index}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
            whileHover={{
              scale: 1.02,
            }}
            onClick={() => openViewer(index)}
          >

            <img
              src={photo.src}
              alt={photo.title}
              loading="lazy"
              decoding="async"
            />

            <div className="gallery-overlay">
              <h3>{photo.title}</h3>

              <p>{photo.date}</p>

              <span className="view-photo">
                View Photo
              </span>
            </div>

          </motion.div>
        ))}

      </div>


      {/* =================================
          IMAGE VIEWER
      ================================= */}

      <AnimatePresence>

        {selectedPhoto && (
          <motion.div
            className="image-viewer"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={closeViewer}
          >

            {/* Close */}

            <button
              className="viewer-close"
              onClick={closeViewer}
              aria-label="Close image viewer"
            >
              <FaTimes />
            </button>


            {/* Previous */}

            <button
              className="viewer-prev"
              onClick={previousImage}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>


            {/* Image area */}

            <motion.div
              className="viewer-content"
              initial={{
                scale: 0.85,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.85,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(e) => e.stopPropagation()}
            >

              <img
                className="viewer-image"
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
              />

              <div className="viewer-info">

                <div>
                  <h2>
                    {selectedPhoto.title}
                  </h2>

                  <p>
                    {selectedPhoto.date}
                  </p>
                </div>

                <span>
                  {selectedIndex + 1} / {PHOTOS.length}
                </span>

              </div>

            </motion.div>


            {/* Next */}

            <button
              className="viewer-next"
              onClick={nextImage}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>

          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}

export default Gallery;
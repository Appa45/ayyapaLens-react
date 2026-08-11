import "./Contact.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-overlay"></div>

      <div className="contact-container">

        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="contact-tag">Let's Connect</span>

          <h1>Get In Touch</h1>

          <p>
            Whether you want to collaborate on a photography project,
            build a website, or simply say hello, I'd love to hear from you.
          </p>

          <div className="contact-info">

            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>Email</h3>
                <a href="mailto:s.v.ayyappanaik123@gmail.com">
                  s.v.ayyappanaik123@gmail.com
                </a>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>Location</h3>
                <p>India</p>
              </div>
            </div>

          </div>
        </motion.div>

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">
              <FaPaperPlane />
              Send Message
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;
import "./Contact.css";
import SEO from "../SEO";

import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef(null);

  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setStatus("sending");

    try {
      const response = await emailjs.sendForm(
        "service_mn3u5kl",
        "template_bgrkdbf",
        form.current,
        {
          publicKey: "rSTXyjNSuo3WzcuB6",
        }
      );

      console.log("Email sent successfully:", response);

      setStatus("success");

      // Clear form after successful email
      form.current.reset();

    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("error");
    }
  };

  return (
    <>
      <SEO
        title="Contact Ayyappa | Photography & Frontend Development"
        description="Contact Ayyappa for frontend development, React projects, photography and creative collaborations."
        canonical="/contact"
      />

      <section className="contact-page">

        <div className="contact-overlay"></div>

        <div className="contact-container">

          {/* =====================================
              LEFT SIDE
          ===================================== */}

          <motion.div
            className="contact-left"
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >

            <span className="contact-tag">
              Let's Connect
            </span>

            <h1>
              Get In Touch
            </h1>

            <p>
              Whether you want to collaborate on a
              photography project, build a website,
              or simply say hello, I'd love to hear
              from you.
            </p>

            <div className="contact-info">

              {/* Email */}

              <div className="info-card">

                <FaEnvelope className="info-icon" />

                <div>
                  <h3>Email</h3>

                  <a href="mailto:s.v.ayyappanaik123@gmail.com">
                    s.v.ayyappanaik123@gmail.com
                  </a>
                </div>

              </div>


              {/* Location */}

              <div className="info-card">

                <FaMapMarkerAlt className="info-icon" />

                <div>
                  <h3>Location</h3>

                  <p>
                    India
                  </p>
                </div>

              </div>

            </div>

          </motion.div>


          {/* =====================================
              RIGHT SIDE - CONTACT FORM
          ===================================== */}

          <motion.div
            className="contact-right"
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >

            <form
              ref={form}
              onSubmit={sendEmail}
            >

              {/* Name */}

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                autoComplete="name"
                required
              />


              {/* Email */}

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                autoComplete="email"
                required
              />


              {/* Subject */}

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />


              {/* Message */}

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                required
              />


              {/* Submit */}

              <button
                type="submit"
                disabled={status === "sending"}
              >

                <FaPaperPlane />

                {status === "sending"
                  ? "Sending..."
                  : "Send Message"
                }

              </button>


              {/* Success */}

              {status === "success" && (
                <p className="contact-success">
                  ✓ Message sent successfully!
                </p>
              )}


              {/* Error */}

              {status === "error" && (
                <p className="contact-error">
                  ✕ Failed to send message. Please try again.
                </p>
              )}

            </form>

          </motion.div>

        </div>

      </section>
    </>
  );
}

export default Contact;
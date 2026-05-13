// app/_Component/Contact.jsx

"use client";

import styles from "./Contact.module.css";
import Navbar from "../_Component/Navbar"
import Footer from "../_Component/Footer"

export default function Contact() {
  return (
    <section className={styles.contact}>
        <Navbar/>
      {/* Blur Effects */}
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>

      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.left}>
          <p className={styles.subTitle}>Get In Touch</p>

          <h1 className={styles.title}>
            Let's Build Something
            <span> Amazing Together</span>
          </h1>

          <p className={styles.description}>
            Feel free to contact me for collaboration,
            freelance work or any web development projects.
            I'm always open to discussing new opportunities.
          </p>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3>Email</h3>
              <a href="mailto:sameer@example.com">
                sameer@example.com
              </a>
            </div>

            <div className={styles.infoCard}>
              <h3>LinkedIn</h3>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/sameer
              </a>
            </div>

            <div className={styles.infoCard}>
              <h3>GitHub</h3>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/sameer
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.formCard}>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Name</label>

              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Message</label>

              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </section>
  );
}
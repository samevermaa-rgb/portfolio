// app/_Component/About.jsx

"use client";

import styles from "./About.module.css";
import Navbar from "../_Component/Navbar"
import Footer from "../_Component/Footer"

export default function About() {
  return (
    <section className={styles.about}>
      <Navbar/>
     
      {/* Blur Effects */}
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>
      

      <div className={styles.container}>
        {/* Section Heading */}
        <div className={styles.headingSection}>
          <p className={styles.subTitle}>About Me</p>

          <h1 className={styles.title}>
            Passionate About Building
            <span> Modern Web Experiences</span>
          </h1>

          <p className={styles.description}>
            I'm Sameer, a MERN Stack Developer focused on building
            responsive, scalable and user-friendly web applications
            with clean UI and powerful backend architecture.
          </p>
        </div>

        {/* Main Grid */}
        <div className={styles.grid}>
          {/* Who I Am */}
          <div className={styles.card}>
            <h2>Who I Am</h2>

            <p>
              I am a Full Stack Web Developer who enjoys turning ideas
              into real-world web applications. I love creating modern,
              fast and interactive websites that provide excellent user
              experiences across all devices.
            </p>

            <p>
              My main focus is writing clean code, improving performance
              and continuously learning new technologies in modern web
              development.
            </p>
          </div>

          {/* Technologies */}
          <div className={styles.card}>
            <h2>Technologies I Work With</h2>

            <div className={styles.techGrid}>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>React.js</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Tailwind CSS</span>
              <span>Git & GitHub</span>
            </div>
          </div>

          {/* Website Types */}
          <div className={styles.card}>
            <h2>What I Can Build</h2>

            <ul className={styles.list}>
              <li>Modern Portfolio Websites</li>
              <li>Business Websites</li>
              <li>Admin Dashboards</li>
              <li>Blog Platforms</li>
              <li>E-Commerce Websites</li>
              <li>Authentication Systems</li>
              <li>REST API Based Applications</li>
              <li>Responsive Full Stack Web Apps</li>
            </ul>
          </div>

          {/* Learning Journey */}
          <div className={styles.card}>
            <h2>My Learning Journey</h2>

            <p>
              My web development journey started with learning HTML,
              CSS and JavaScript. After building frontend projects,
              I moved towards backend development using Node.js,
              Express.js and MongoDB.
            </p>

            <p>
              Currently, I am improving my skills in Next.js,
              API development, authentication systems and scalable
              full stack applications while building real-world projects.
            </p>
          </div>
        </div>
      </div>
       <Footer/>
    </section>
  );
}
// app/_Component/Projects.jsx

"use client";

import Image from "next/image";
import styles from "./Projects.module.css";
import Navbar from "../_Component/Navbar"
import Footer from "../_Component/Footer"

export default function Projects() {
    <></>
  const projects = [
    {
      id: 1,
      title: "MERN Blog Platform",
      image: "/projects/blog.png",
      description:
        "A full stack blog platform built using MongoDB, Express.js, React and Node.js. Users can create, update and manage blogs with authentication and dashboard features.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },

    {
      id: 2,
      title: "E-Commerce Website",
      image: "/projects/ecommerce.png",
      description:
        "A modern e-commerce web application with product listings, cart functionality, authentication system and responsive design for all devices.",
      tech: ["Next.js", "MongoDB", "Stripe", "Tailwind"],
    },

    {
      id: 3,
      title: "Admin Dashboard",
      image: "/projects/dashboard.png",
      description:
        "A responsive admin dashboard with analytics, charts, authentication and CRUD functionality designed for modern business management systems.",
      tech: ["Next.js", "Chart.js", "Node.js", "MongoDB"],
    },
  ];

  return (
    <section className={styles.projects}>
        <Navbar/>
      {/* Blur Effects */}
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>

      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.heading}>
          <p className={styles.subTitle}>My Projects</p>

          <h1 className={styles.title}>
            Featured <span>Projects</span>
          </h1>

          <p className={styles.description}>
            Here are some of the full stack and frontend projects
            I have built using modern web technologies.
          </p>
        </div>

        {/* Project Cards */}
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              {/* Image */}
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.image}
                />
              </div>

              {/* Content */}
              <div className={styles.content}>
                <h2>{project.title}</h2>

                <p>{project.description}</p>

                {/* Tech Stack */}
                <div className={styles.techStack}>
                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className={styles.buttonGroup}>
                  <button className={styles.liveBtn}>
                    Live Demo
                  </button>

                  <button className={styles.codeBtn}>
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </section>
  );
}
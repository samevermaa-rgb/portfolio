"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          Sameer<span className={styles.highlight}>.dev</span>
        </Link>
      </div>

      <div className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <Link href="/" className={styles.link} onClick={closeMenu}>
          Home
        </Link>
        <Link href="/about" className={styles.link} onClick={closeMenu}>
          About
        </Link>
        <Link href="/projects" className={styles.link} onClick={closeMenu}>
          Projects
        </Link>
        <Link href="/contact" className={styles.link} onClick={closeMenu}>
          Contact
        </Link>
      </div>

      <div className={`${styles.hamburger} ${isOpen ? styles.open : ""}`} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
};

export default Navbar;
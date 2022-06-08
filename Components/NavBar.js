import React from 'react'
import Image from "next/image";
import Link from "next/Link";
import styles from "../styles/Home.module.css";
const NavBar = () => {
  return (
    <nav className={styles.mainNav}>
    <ul>
      <Link href="/">
        <a>
          <li>Home</li>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <li>About</li>
        </a>
      </Link>
      <Link href="/blog">
        <a>
          <li>Blog</li>
        </a>
      </Link>
      <Link href="/contact">
        <a>
          <li>Contact Us</li>
        </a>
      </Link>
    </ul>
  </nav>
  )
}

export default NavBar
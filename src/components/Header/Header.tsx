'use client'

// import vendors
import { useState } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link';

// import components
import Motion from "@/components/Motion/Motion";

// import variants
import { animateMenu, fadeIn } from '@/utils/motion'

// import styles
import styles from '@/styles/header.module.scss'

export default function Header() {
  const [isActive, setActive] = useState(false);

  return (
    <Motion
      as="header"
      variants={fadeIn(0, 0.5,"down", -10)}
      className={styles.header}
    >
      <a href="/" className={styles.logo}>
        <Image
          src="./assets/images/logo.svg"
          alt="sunny side"
          width={0}
          height={0}
        />
      </a>
      <motion.nav
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        variants={animateMenu}
      >
        <div className={styles.angle}></div>
        <ul>
          <li><Link href="#">About</Link></li>
          <li><Link href="#">Services</Link></li>
          <li><Link href="#">Projects</Link></li>
          <li className={styles.contact}><Link href="#">Contact</Link></li>
        </ul>
      </motion.nav>
      <div className={styles.iconHamburger} onClick={() => setActive(current => !current)}>
        <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fillRule="evenodd"/>
        </svg>
      </div>
    </Motion>
  )
}

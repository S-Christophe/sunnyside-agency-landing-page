'use client'

// import vendors
import Image from 'next/image'
import Link from 'next/link';

// import components
import Motion from "@/components/Motion/Motion";

// import styles
import styles from '@/styles/footer.module.scss'

// import variants
import { fadeIn } from '@/utils/motion'

export default function Footer() {
  return (
    <Motion
      as="footer"
      variants={fadeIn(0.6, 0.5)}
      className={styles.footer}
    >
      <a href="/" className={styles.logo}>
        <Image
          src="./assets/images/logo.svg"
          alt="sunny side"
          width={0}
          height={0}
        />
      </a>
      <nav>
        <ul>
          <li><Link href="#">About</Link></li>
          <li><Link href="#">Services</Link></li>
          <li><Link href="#">Projects</Link></li>
        </ul>
      </nav>
      <div className={styles.socialNetworks}>
        <a href="#" className={styles.socialIcon}>
          <Image
            src="./assets/images/icon-facebook.svg"
            alt="facebook"
            width={25}
            height={25}
          />
        </a>
        <a href="#" className={styles.socialIcon}>
          <Image
            src="./assets/images/icon-instagram.svg"
            alt="instagram"
            width={25}
            height={25}
          />
        </a>
        <a href="#" className={styles.socialIcon}>
          <Image
            src="./assets/images/icon-twitter.svg"
            alt="twitter"
            width={25}
            height={25}
          />
        </a>
        <a href="#" className={styles.socialIcon}>
          <Image
            src="./assets/images/icon-pinterest.svg"
            alt="pinterest"
            width={25}
            height={25}
          />
        </a>
      </div>
    </Motion>
  )
}

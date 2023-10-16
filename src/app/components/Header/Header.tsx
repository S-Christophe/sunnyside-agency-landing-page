// import vendors
import Image from 'next/image'
import Link from 'next/link';

// import styles
import styles from '../../styles/header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <Image
          src="./assets/images/logo.svg"
          alt="sunny side"
          fill
        />
      </a>
      <nav>
        <ul>
          <li><Link href="#">About</Link></li>
          <li><Link href="#">Services</Link></li>
          <li><Link href="#">Projects</Link></li>
          <li><Link href="#">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

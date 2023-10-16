// import vendors
import Image from 'next/image'
import Link from 'next/link';

// import styles
import styles from '../../styles/footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
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
        </ul>
      </nav>
    </footer>
  )
}

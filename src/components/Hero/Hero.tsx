'use client'
// import vendors
import Image from 'next/image'

// import components
import Motion from "@/components/Motion/Motion";

// import variants
import { fadeIn, heroArrow } from '@/utils/motion'

// import styles
import styles from '@/styles/hero.module.scss'

export default function Hero() {
  return (
    <Motion
      as="section"
      variants={fadeIn(0, 0.5,"down", -10)}
      className={styles.hero}
    >
      <Motion
        as="h1"
        variants={fadeIn(0.5, 0.8, "up", 50)}
      >
        We are creatives
      </Motion>
      <Motion
        as="div"
        variants={heroArrow}
        className={styles.img}
      >
        <Image
          src="./assets/images/icon-arrow-down.svg"
          alt="sunny side"
          width={36}
          height={114}
        />
      </Motion>
    </Motion>
  )
}
'use client'

// import vendors
import Image from 'next/image'
import { motion } from "framer-motion";

// import components
import Motion from "@/components/Motion/Motion";

// import styles
import styles from '@/styles/imggrid.module.scss'

// import variants
import { imgGrid, imgItem } from '@/utils/motion'

export default function ImgGrid() {
  return (
    <Motion
      as="section"
      variants={imgGrid}
      className={styles.imgGrid}
    >
      <motion.div
        variants={imgItem}
        className={styles.imgItem}
      >
			  <Image
          src="/assets/images/mobile/image-gallery-milkbottles.jpg"
          alt="milkbottles"
          fill
          sizes="(max-width: 62rem) 50vw, 25vw"
        />
      </motion.div>
      <motion.div
        variants={imgItem}
        className={styles.imgItem}
      >
			  <Image
          src="/assets/images/mobile/image-gallery-orange.jpg"
          alt="orange"
          fill
          sizes="(max-width: 62rem) 50vw, 25vw"
        />
      </motion.div>
      <motion.div
        variants={imgItem}
        className={styles.imgItem}
      >
			  <Image
          src="/assets/images/mobile/image-gallery-cone.jpg"
          alt="cone"
          fill
          sizes="(max-width: 62rem) 50vw, 25vw"
        />
      </motion.div>
      <motion.div
        variants={imgItem}
        className={styles.imgItem}
      >
			  <Image
          src="/assets/images/mobile/image-gallery-sugar-cubes.jpg"
          alt="sugar cubes"
          fill
          sizes="(max-width: 62rem) 50vw, 25vw"
        />
      </motion.div>
    </Motion>
  )
}

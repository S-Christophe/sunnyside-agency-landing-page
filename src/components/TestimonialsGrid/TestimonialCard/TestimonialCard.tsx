// import vendors
import Image from 'next/image'

// import components
import Motion from "@/components/Motion/Motion";

// import variants
import { fadeIn } from '@/utils/motion'

// import styles
import styles from '@/styles/testimonialcard.module.scss'

// import types
import { ITestimonial } from '@/types/Testimonial'

export default function TestimonialCard({name, description, img, job}: ITestimonial) {
  return (
    <div className={styles.testimonialCard}>
      <Motion
        as="div"
        variants={fadeIn(0.2, 0.5)}
      >
        <Image
          src={img}
          alt={name}
          width={100}
          height={100}
        />
      </Motion>
      <Motion
        as="p"
        variants={fadeIn(0.4, 0.5,"up", 50)}
        className={styles.description}
      >
        {description}
      </Motion>
      <Motion
        as="p"
        variants={fadeIn(0.6, 0.5, "up", 50)}
        className={styles.name}
      >
        {name}
      </Motion>
      <Motion
        as="p"
        variants={fadeIn(0.8, 0.5, "up", 50)}
        className={styles.job}
      >
        {job}
      </Motion>
    </div>
  )
}

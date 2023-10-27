'use client'

// import components
import Motion from "@/components/Motion/Motion";
import TestimonialCard from './TestimonialCard/TestimonialCard'

// import datas
import TestomonialsDatas from "../../static/TestimonialsDatas.json";

// import styles
import styles from '@/styles/testimonialsgrid.module.scss'

// import variants
import { fadeIn } from '@/utils/motion'

export default function TestimonialsGrid() {
  return (
    <section className={styles.testimonialsGrid}>
      <Motion
        as="h2"
        variants={fadeIn(0, 0.5,"down", -10)}
      >
        Client testimonials
      </Motion>
      <div className={styles.container} >
        {TestomonialsDatas.map((item, i) => (
          <TestimonialCard key={i} {...item} />
        ))}
      </div>
    </section>
  )
}

import Hero from '@/components/Hero/Hero'
import ArticlesGrid from '@/components/ArticlesGrid/ArticlesGrid'
import ImgGrid from '@/components/ImgGrid/ImgGrid'
import TestimonialsGrid from '@/components/TestimonialsGrid/TestimonialsGrid'

export default function Home() {
  return (
    <main>
      <Hero />
      <ArticlesGrid />
      <TestimonialsGrid />
      <ImgGrid />
    </main>
  )
}

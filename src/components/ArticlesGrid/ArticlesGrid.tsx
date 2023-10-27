// import styles
import styles from '@/styles/articlesgrid.module.scss'

// datas
import ArticlesDatas from "../../static/ArticlesDatas.json";

// Components
import ArticleCard from './ArticleCard/ArticleCard'

export default function ArticlesGrid() {
  return (
    <section className={styles.articlesGrid}>
      <div className={styles.container} >
        {ArticlesDatas.map((item, i) => (
          <ArticleCard key={i} {...item} />
        ))}
      </div>
    </section>
  )
}

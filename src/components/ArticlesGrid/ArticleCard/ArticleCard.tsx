'use client'

// import vendors
import Link from 'next/link';

// import components
import Motion from "@/components/Motion/Motion";

// import hooks
import useMediaQuery from '@/hooks/useMediaQuery'

// import styles
import styles from '@/styles/articlecard.module.scss'

// import types
import { IArticle } from '@/types/Article'

// import variants
import { fadeIn } from '@/utils/motion'

/**
 * * Return the appropriate className to each type of card
 * * case 1 = only background
 * * case 2 = only text
 * * case 3 = text + background
 * @param _id
 * @param type 
 * @returns className 
 */
function isType({_id, type}: IArticle) {
  switch(type) {
    case 1:
      return null;
    case 2:
      if(_id == 2)
        return `${styles['yellow']}`;
      if(_id == 4)
        return `${styles['soft-red']}`;
      return null;
    case 3:
      if(_id == 5)
        return `${styles[`item-${type}`]} ${styles['graphic-design']}`;
      if(_id == 6)
        return `${styles[`item-${type}`]} ${styles[`photography`]}`;
      return null;
    default:
      return null;
  }
}

export default function ArticleCard({_id, title, description, url, bgImg, bgImgDesktop, type}: IArticle) {
  const isDesktop = useMediaQuery('(min-width: 62rem)');

  return (
    <Motion
      as="div"
      variants={fadeIn(0, 0.5)}
      className={`${styles.item} ${isType({_id, type})}`}
      style={{ backgroundImage: bgImg && `url(${isDesktop ? bgImgDesktop : bgImg})`}}
    >
      {type == 3 || type == 2 ? (
        <>
          <Motion
            as="h2"
            variants={fadeIn(0, 0.5,"down", -10)}
          >
            {title}
          </Motion>
          <Motion
            as="p"
            variants={fadeIn(0.2, 0.5,"up", 50)}
            className={styles.description}
          >
            {description}
          </Motion>

          {type == 2 && (
            <Motion
              as="div"
              variants={fadeIn(0.4, 0.5,"up", 50)}
            >
              <Link href="#">Learn more</Link>
            </Motion>
          )}
        </>
      ) : null }
    </Motion>
  )
}

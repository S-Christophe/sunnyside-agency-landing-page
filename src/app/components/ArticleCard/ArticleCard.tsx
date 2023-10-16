// import vendors
import Link from 'next/link';

// import styles
import styles from '../../styles/articlecard.module.scss'

// import types
import { IArticle } from '../../types/Article'

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
  return (
    <div className={`${styles.item} ${isType({_id, type})}`} style={{ backgroundImage: bgImgDesktop && `url(${bgImgDesktop})`}}>
      {type == 3 || type == 2 ? (
        <>
          <h2>{title}</h2>
          <p>{description}</p>

          {type == 2 && (
            <Link href="#">Learn more</Link>
          )}
        </>
      ) : null }
    </div>
  )
}

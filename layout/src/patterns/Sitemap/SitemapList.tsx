import Link from 'next/link'

import styles from './Sitemap.module.scss'

interface Link {
  link: string
  title: string
}

type Title = string

type Links = Link[]

const SitemapList: React.FC<{ links: Links; title: Title }> = ({
  links,
  title
}) => {
  return (
    <ul className={styles.sitemap__list}>
      <h4 className={styles.sitemap__title}>{title}</h4>
      {links.map(({ link, title }: Link) => (
        <li key={title} className={styles.sitemap__item}>
          <Link href={link}>{title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default SitemapList

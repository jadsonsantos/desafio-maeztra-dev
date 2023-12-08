import Link from 'next/link'

import styles from './Sitemap.module.scss'

interface Link {
  link: string
  title: string
}

interface LinksProps {
  links: Link[]
  heading: string
}

const SitemapList: React.FC<LinksProps> = ({ links, heading }: LinksProps) => {
  return (
    <ul className={styles.sitemap__list}>
      <h4 className={styles.sitemap__title}>{heading}</h4>
      {links.map(({ link, title }: Link) => (
        <li key={title} className={styles.sitemap__item}>
          <Link href={link}>{title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default SitemapList

import Link from 'next/link'

import styles from './Menu.module.scss'

import { menu } from './data'

const Menu = () => {
  return (
    <nav className={`container ${styles.menu}`}>
      <ul className={styles.menu__list}>
        {menu.map(({ link, title }) => (
          <li key={title} className={styles.menu__item}>
            <Link href={link} className={styles.menu__item}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu

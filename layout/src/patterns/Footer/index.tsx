import Image from 'next/image'

import styles from './Footer.module.scss'

import { cards, social, development } from './data'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        <div className={styles.footer__icons}>
          {social.map(({ title, icon, heigth = 32 }) => (
            <Image
              src={`/icons/${icon}.svg`}
              width={32}
              height={heigth}
              alt={title}
              key={title}
            />
          ))}
        </div>
        <div className={styles.footer__icons}>
          {cards.map(({ title, icon }) => (
            <Image
              src={`/icons/${icon}.svg`}
              width={32}
              height={25}
              alt={title}
              key={title}
            />
          ))}
        </div>
        <div
          className={`${styles.footer__icons} ${styles.footer__development}`}
        >
          {development.map(({ title, icon, width, description }) => (
            <div className={styles.footer__developmentItem} key={title}>
              <p className={styles.footer__developmentDescription}>
                {description}
              </p>
              <Image
                src={`/icons/${icon}.svg`}
                width={width}
                height={28}
                alt={title}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer

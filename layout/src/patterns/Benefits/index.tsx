import Image from 'next/image'

import styles from './Benefits.module.scss'

import { benefits } from './data'

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <div className={`${styles.benefits__container} container`}>
        <h3 className={styles.benefits__title}>Por que comprar na Maeztra?</h3>
        <div className={styles.benefits__list}>
          {benefits.map(({ icon, title, description }) => (
            <article className={styles.benefit} key={icon}>
              <Image
                src={`/icons/${icon}.svg`}
                alt={description}
                width={32}
                height={32}
              />
              <div className={styles.benefit__text}>
                <p className={styles.benefit__title}>{title}</p>
                <p className={styles.benefit__description}>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits

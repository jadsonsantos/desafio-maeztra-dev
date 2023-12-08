'use client'
import Image from 'next/image'

import styles from './Highlight.module.scss'

import bannerMobile from '../../../public/images/banner-highlight-mobile.png'
import banner from '../../../public/images/banner-highlight.png'

import useDeviceDetect from 'utils/useDeviceDetect'

const Highlight = () => {
  const { isMobile } = useDeviceDetect()

  return (
    <section className={styles.highlight}>
      <div className={`${styles.highlight__container} container`}>
        <div className={styles.highlight__text}>
          <h3 className={styles.highlight__title}>lorem ipsum</h3>
          <p className={styles.highlight__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            totam soluta, distinctio culpa ratione doloremque consequatur rem
            delectus similique blanditiis maxime molestiae sint eum laborum
            dolorum quod suscipit. Impedit, vitae?
          </p>
        </div>
        <Image
          src={isMobile ? bannerMobile : banner}
          alt="Modelo usando vestido amarelo posando para a foto"
        />
      </div>
    </section>
  )
}

export default Highlight

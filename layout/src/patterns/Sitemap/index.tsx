'use client'

import Accordion from 'components/Accordion'

import styles from './Sitemap.module.scss'

import data from './data'
import SitemapList from './SitemapList'

import useDeviceDetect from 'utils/useDeviceDetect'

const Sitemap = () => {
  const { isMobile } = useDeviceDetect()

  return (
    <section className={styles.sitemap}>
      <div className={`${styles.sitemap__container} container`}>
        {isMobile ? (
          <>
            <Accordion title="Informações" />
            <Accordion title="Minha Conta" />
            <Accordion title="Onde nos Encontrar" />
          </>
        ) : (
          <>
            <SitemapList links={data.about} heading="Informações" />
            <SitemapList links={data.account} heading="Minha Conta" />
            <SitemapList links={data.stores} heading="Onde nos Encontrar" />
          </>
        )}
      </div>
    </section>
  )
}

export default Sitemap

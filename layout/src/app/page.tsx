import TipBar from 'components/TipBar'
import Benefits from 'patterns/Benefits'
import Brands from 'patterns/Brands'
import Footer from 'patterns/Footer'
import Header from 'patterns/Header'
import Hero from 'patterns/Hero'
import Highlight from 'patterns/Highlight'
import Newsletter from 'patterns/Newsletter'
import Shelf from 'patterns/Shelf'
import Sitemap from 'patterns/Sitemap'

import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <TipBar />
      <Header />
      <main className={styles.main}>
        <Hero />
        <Benefits />
        <Brands />
        <Shelf />
        <Highlight />
      </main>
      <Newsletter />
      <Sitemap />
      <Footer />
    </>
  )
}

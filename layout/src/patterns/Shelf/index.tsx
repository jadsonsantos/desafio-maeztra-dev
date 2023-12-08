'use client'
import React from 'react'

import Carousel from 'components/Carousel'
import Heading from 'components/Heading'

import styles from './Shelf.module.scss'

import { products } from './data'
import ShelfItem from './ShelfItem'

import useDeviceDetect from 'utils/useDeviceDetect'

const Shelf: React.FC = () => {
  const { isMobile } = useDeviceDetect()

  return (
    <section className={`shelf ${styles.shelf}`}>
      <div className="container">
        <Heading>As Mais Pedidas</Heading>
        <ul className={styles.shelf__list}>
          <Carousel slidesToShow={isMobile ? 1 : 5} dots={false}>
            {products.map((product) => (
              <ShelfItem key={product.id} product={product} />
            ))}
          </Carousel>
        </ul>
      </div>
    </section>
  )
}

export default Shelf

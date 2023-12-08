import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Skus from 'components/Skus'

import styles from './ShelfItem.module.scss'

// import productImage from '../../../public/images/product-01.png'

interface Sku {
  color: string
  id: number
}

interface Product {
  id: number
  name: string
  price: string
  description: string
  skus: Sku[]
}

interface ProductProps {
  product: Product
}

const ShelfItem: React.FC<ProductProps> = ({ product }: ProductProps) => {
  const { name, price, description, skus, id } = product

  return (
    <li className={styles.product}>
      <Image
        src={`/images/product-${id}.png`}
        height={381}
        width={308}
        alt={name}
      />
      <div className={styles.product__infos}>
        <Skus skus={skus} />
        <p className={styles.product__price}>{price}</p>
        <p className={styles.product__name}>{name}</p>
        <p className={styles.product__description}>{description}</p>
        <Link href="/" className={styles.product__btn}>
          Adicionar
        </Link>
      </div>
    </li>
  )
}

export default ShelfItem

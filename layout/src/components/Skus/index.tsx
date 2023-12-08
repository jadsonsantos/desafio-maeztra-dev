import React from 'react'

import styles from './Skus.module.scss'

interface Sku {
  color: string
  id: number
}

interface SkusProps {
  skus: Sku[]
}

const Skus: React.FC<SkusProps> = ({ skus }) => {
  return (
    <ul className={styles.skus}>
      {skus.map((sku) => (
        <li
          className={styles.skus__item}
          key={sku.id}
          style={{
            backgroundColor: sku.color
          }}
        ></li>
      ))}
    </ul>
  )
}

export default Skus

import Image from 'next/image'

import Heading from 'components/Heading'

import style from './Brands.module.scss'

import { brands } from './data'

const Brands = () => {
  return (
    <section className={style.brands}>
      <div className={`container`}>
        <Heading>Marcas Parceiras</Heading>
        <div className={style.brands__list}>
          {brands.map(({ path, name }) => (
            <Image
              key={name}
              src={path}
              alt={name}
              className={style.brands__image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands

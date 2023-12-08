'use client'
import Image from 'next/image'

import Carousel from 'components/Carousel'

import HeroBannerMobile from '../../../public/images/banner-hero-mobile.png'
import HeroBanner from '../../../public/images/banner-hero.png'
import { banners } from './data'

import useDeviceDetect from 'utils/useDeviceDetect'

const Hero = () => {
  const { isMobile } = useDeviceDetect()

  return (
    <section className="hero">
      <Carousel>
        {banners.map(({ id, name }) => (
          <Image
            src={isMobile ? HeroBannerMobile : HeroBanner}
            alt={name}
            key={id}
          />
        ))}
      </Carousel>
    </section>
  )
}

export default Hero

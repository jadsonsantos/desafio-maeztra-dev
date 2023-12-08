'use client'
import Image from 'next/image'

import styles from './Accordion.module.scss'

import iconPlus from '../../../public/icons/plus.svg'
import useAccordion from './useAccordion'

import classNames from 'classnames/bind'

type Title = { title: string }

const Accordion = ({ title }: Title) => {
  const { handleClick, isActive } = useAccordion()
  const cx = classNames.bind(styles)

  const buttonClass = cx({
    accordion__button: true,
    'accordion__button--active': isActive
  })

  const contentClass = cx({
    accordion__content: true,
    'accordion__content--active': isActive
  })

  return (
    <article className={styles.accordion}>
      <button className={buttonClass} onClick={handleClick}>
        {title}
        <Image src={iconPlus} alt="teste" />
      </button>
      <div className={contentClass}>content</div>
    </article>
  )
}

export default Accordion

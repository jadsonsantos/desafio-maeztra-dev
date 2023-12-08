import Image from 'next/image'
import Link from 'next/link'

import styles from './Actions.module.scss'

import classNames from 'classnames/bind'

interface Actions {
  icon: string
  title: string
  link: string
  alt: string
  isHighlighted: boolean
}

interface ActionsProp {
  actions: Actions[]
}

const Actions: React.FC<ActionsProp> = ({ actions }: ActionsProp) => {
  const cx = classNames.bind(styles)

  const linkClass = cx({
    actions__link: true
    // 'actions__link--highlighted': isHighlighted
  })

  return (
    <div className={styles.actions}>
      {actions.map(({ icon, title, link, alt }) => (
        <Link href={link} key={title} className={linkClass}>
          <Image src={icon} alt={alt} />
          {title && <span className={styles.actions__title}>{title}</span>}
        </Link>
      ))}
    </div>
  )
}

export default Actions

import styles from './Heading.module.scss'

type Props = {
  children: string
  className?: React.ReactNode
}

const Heading = ({ children, className = '' }: Props) => {
  return <h2 className={`${styles.heading} ${className}`}>{children}</h2>
}

export default Heading

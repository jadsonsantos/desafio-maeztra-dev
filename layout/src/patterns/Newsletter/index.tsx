import styles from './Newsletter.module.scss'

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <div className={`${styles.newsletter__container} container`}>
        <h3 className={styles.newsletter__title}>Receba Nossa Newsletter</h3>
        <form className={styles.newsletter__form}>
          <input
            className={styles.newsletter__input}
            placeholder="Digite seu e-mail"
          />
          <button className={styles.newsletter__button}>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter

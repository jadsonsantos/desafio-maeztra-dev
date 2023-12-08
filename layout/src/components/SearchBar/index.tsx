import React from 'react'

import styles from './SearchBar.module.scss'

const SearchBar = () => {
  return (
    <section className={styles.searchbar}>
      <form className={styles.searchbar__form}>
        <input
          className={styles.searchbar__input}
          placeholder="O Que Você Busca?"
        />
        <button className={styles.searchbar__button} type="submit">
          Buscar
        </button>
      </form>
    </section>
  )
}

export default SearchBar

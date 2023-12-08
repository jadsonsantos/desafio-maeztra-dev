'use client'
import Actions from 'components/Actions'
import Logo from 'components/Logo'
import MenuButton from 'components/MenuButton'
import SearchBar from 'components/SearchBar'
import Menu from 'patterns/Menu'

import styles from './Header.module.scss'

import { actionsDesktop, actionsMobile } from './data'

import useDeviceDetect from 'utils/useDeviceDetect'

const Header = () => {
  const { isMobile } = useDeviceDetect()

  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <div className={`container ${styles.header__container}`}>
          {isMobile && <MenuButton />}
          <Logo />
          {isMobile && <Actions actions={actionsMobile} />}
          {!isMobile && (
            <>
              <SearchBar />
              <Actions actions={actionsDesktop} />
            </>
          )}
        </div>
      </div>
      <Menu />
    </header>
  )
}

export default Header

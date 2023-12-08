import Image from 'next/image'

import iconMenu from '../../../public/icons/icon-menu.svg'

const MenuButton = () => {
  return (
    <button type="button">
      <Image src={iconMenu} alt="Logo de menu" />
    </button>
  )
}

export default MenuButton

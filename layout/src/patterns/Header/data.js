import iconHeart from '../../../public/icons/icon-heart.svg'
import iconSearch from '../../../public/icons/icon-search.svg'
import iconBagMobile from '../../../public/icons/icon-shoppingbag-mobile.svg'
import iconBag from '../../../public/icons/icon-shoppingbag.svg'
import iconUser from '../../../public/icons/icon-user.svg'

const actionsDesktop = [
  {
    icon: iconUser,
    title: 'Minha Conta',
    alt: 'Ícone de minha conta',
    link: ''
  },
  {
    icon: iconHeart,
    title: 'Meus Favoritos',
    alt: 'Ícone de meus favoritos',
    link: ''
  },
  {
    icon: iconBag,
    title: 'Meu Carrinho',
    alt: 'Ícone de meu carrinho',
    link: '',
    isHighlighted: true
  }
]

const actionsMobile = [
  {
    icon: iconSearch,
    alt: 'Ícone de busca',
    link: ''
  },
  {
    icon: iconBagMobile,
    alt: 'Íconde meu Carrinho',
    link: ''
  }
]

export { actionsDesktop, actionsMobile }

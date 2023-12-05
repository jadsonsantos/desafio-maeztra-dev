import { Montserrat, Titillium_Web } from 'next/font/google'

import './variables.scss'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-montserrat'
})

const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-titilliumWeb'
})

export { montserrat, titilliumWeb }

import Image from 'next/image'
import Link from 'next/link'

import iconLogo from '../../../public/images/logo.svg'

const Logo = () => {
  return (
    <Link href="/">
      <Image src={iconLogo} alt="Logo da Maeztra" />
    </Link>
  )
}

export default Logo

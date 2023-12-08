'use client'
import { useState } from 'react'

const useAccordion = () => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return { handleClick, isActive }
}

export default useAccordion

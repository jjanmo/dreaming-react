import { useEffect, useState } from 'react'

export default function useDarkMode() {
  const [isDarkMode, setDarkMode] = useState<boolean>(false)

  const updateDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [isDarkMode])

  return {
    isDarkMode,
    updateDarkMode,
  }
}

import { useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage'

export default function useDarkMode() {
  const { getValue, setValue } = useLocalStorage<boolean>({ key: '@darkmode', initialValue: false })
  const [isDarkMode, setDarkMode] = useState<boolean>(getValue())

  const updateDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  useEffect(() => {
    setValue(isDarkMode)

    if (isDarkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [isDarkMode, setValue])

  return {
    isDarkMode,
    updateDarkMode,
  }
}

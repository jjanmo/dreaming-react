import { useCallback } from 'react'

interface Props<T> {
  key: string
  initialValue: T
}

export default function useLocalStorage<T>({ key, initialValue }: Props<T>) {
  const setValue = useCallback(
    (value: T) => {
      if (typeof window === 'undefined')
        return console.warn(`${key} is not defined in localstorage`)

      window.localStorage.setItem(key, JSON.stringify(value))
    },
    [key]
  )

  const getValue = useCallback(() => {
    if (typeof window === 'undefined') return initialValue

    const value = window.localStorage.getItem(key)

    return value ? (JSON.parse(value) as T) : initialValue
  }, [key, initialValue])

  return {
    setValue,
    getValue,
  }
}

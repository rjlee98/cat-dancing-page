import { useCallback, useState } from 'react'

export function useAnimation(initialIsDancing = true) {
  const [isDancing, setIsDancing] = useState(initialIsDancing)

  const toggle = useCallback(() => {
    setIsDancing((prev) => !prev)
  }, [])

  return { isDancing, toggle }
}

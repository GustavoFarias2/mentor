import { RefObject, useEffect, useRef } from 'react'

const useOuterClick = (
  callback: (e: MouseEvent) => void
): RefObject<HTMLDivElement> => {
  const callbackRef = useRef<(e: MouseEvent) => void>()
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    callbackRef.current = callback
  })

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target as Node)
      )
        callbackRef.current(e)
    }

    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  }, [])

  return innerRef
}

export default useOuterClick

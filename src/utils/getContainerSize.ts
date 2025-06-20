import { useEffect, useState } from 'react'
import type { RefObject } from 'react'

export const getContainerSize = (ref: RefObject<HTMLElement>) => {
  const [size, setSize] = useState<number>(0)

  useEffect(() => {
    if (!ref.current) return

    const observer = new ResizeObserver(([entry]) => {
      const newSize = Math.min(
        entry.contentRect.width,
        entry.contentRect.height
      )
      setSize(newSize)
    })

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref])

  return size
}

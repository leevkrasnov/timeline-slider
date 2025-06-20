import { useEffect, useState } from 'react'

export const getContainerSize = (ref: React.RefObject<HTMLElement>) => {
  const [size, setSize] = useState<number>(0)

  useEffect(() => {
    if (!ref.current) return

    const observeTarget = ref.current
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect
        setSize(width)
      }
    })

    resizeObserver.observe(observeTarget)

    return () => resizeObserver.disconnect()
  }, [ref])

  return size
}

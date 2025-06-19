import { useState, useEffect, useRef } from 'react'

interface AnimatedCounterProps {
  targetValue: number
  initialValue: number
  duration?: number
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  targetValue,
  initialValue,
  duration = 2000,
}) => {
  const [currentValue, setCurrentValue] = useState<number>(initialValue)
  const animationRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const startValueRef = useRef<number>(initialValue)

  useEffect(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    startValueRef.current = currentValue
    startTimeRef.current = performance.now()

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp

      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)

      const easing = 1 - Math.pow(1 - progress, 3)

      const newValue = Math.round(
        startValueRef.current + (targetValue - startValueRef.current) * easing
      )

      setCurrentValue(newValue)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setCurrentValue(targetValue)
        animationRef.current = null
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [targetValue, duration])

  return currentValue.toString()
}

export default AnimatedCounter

import { useCallback, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

interface MarkerProps {
  active: boolean
  left: number
  top: number
}

interface MarkerTextProps {
  rotationAngle: number
  visible: boolean
}

const MAX_COUNT = 6
const START_ANGLE = (7 * Math.PI) / 4
const ANGLE_STEP = (2 * Math.PI) / MAX_COUNT

const InteractiveRing = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [size, setSize] = useState<number>(0)

  const [activeIndex, setActiveIndex] = useState<number>(1)

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      const newSize = Math.min(
        entry.contentRect.width,
        entry.contentRect.height
      )
      setSize(newSize)
    })

    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [])

  const radius = size / 2
  const center = size / 2

  const rotationAngle = START_ANGLE - ANGLE_STEP * (activeIndex - 1)
  const markersData = Array.from({ length: MAX_COUNT }, (_, i) => {
    const angle = ANGLE_STEP * i
    return {
      index: i + 1,
      left: center + radius * Math.cos(angle),
      top: center + radius * Math.sin(angle),
    }
  })

  const handleClick = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  return (
    <RingContainer ref={containerRef}>
      <RotatingRing style={{ transform: `rotate(${rotationAngle}rad)` }}>
        {markersData.map(({ index, left, top }) => (
          <Marker
            key={index}
            active={index === activeIndex}
            left={left}
            top={top}
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <MarkerText
              rotationAngle={rotationAngle}
              visible={hoveredIndex === index || index === activeIndex}
            >
              {index}
            </MarkerText>
          </Marker>
        ))}
      </RotatingRing>
    </RingContainer>
  )
}

const RingContainer = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  width: clamp(360px, 27vw, 530px);
  height: clamp(360px, 27vw, 530px);
  overflow: visible;
`

const RotatingRing = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid rgba(48, 62, 88, 0.2);
  transition: transform 0.5s ease-in-out;
`

const Marker = styled.div<MarkerProps>`
  position: absolute;
  left: ${({ left }) => `${left}px`};
  top: ${({ top }) => `${top}px`};
  width: ${({ active }) => (active ? 'clamp(25px, 2.5vw, 50px)' : '6px')};
  height: ${({ active }) => (active ? 'clamp(25px, 2.5vw, 50px)' : '6px')};

  background-color: ${({ active, theme }) =>
    active ? theme.colors.customWhite : theme.colors.blackBlue};
  border: ${({ active }) =>
    active ? '1px solid rgba(48, 62, 88, 0.5)' : 'none'};
  border-radius: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ active, theme }) =>
    !active &&
    css`
      &:hover {
        background-color: ${theme.colors.customWhite};
        width: clamp(25px, 2.5vw, 50px);
        height: clamp(25px, 2.5vw, 50px);
        border: 1px solid rgba(48, 62, 88, 0.5);
      }
    `}

  ${({ active }) =>
    active &&
    css`
      border: 1px solid rgba(48, 62, 88, 0.5);
    `}
`

const MarkerText = styled.span<MarkerTextProps>`
  font-size: clamp(12px, 1vw, 20px);
  color: ${({ theme }) => theme.colors.blackBlue};
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  transform: rotate(${({ rotationAngle }) => -rotationAngle}rad);
`

export default InteractiveRing

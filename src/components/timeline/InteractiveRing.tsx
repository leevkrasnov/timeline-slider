import { useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import { useDataContext } from '@/context/useDataContext'
import {
  getCoordinates,
  calculateMarkers,
  getActualCount,
} from '@/utils/geometryHelpers'
import { getContainerSize } from '@/utils/getContainerSize'

const InteractiveRing = () => {
  const { activeIndex, setActiveIndex, periodsLength } = useDataContext()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const size = getContainerSize(containerRef)
  const actualCount = getActualCount(periodsLength)

  const { rotationAngle, radius, center, angleStep } = getCoordinates(
    size,
    activeIndex,
    actualCount
  )

  const markersData = useMemo(() => {
    return calculateMarkers({
      count: actualCount,
      radius,
      center,
      angleStep,
    })
  }, [radius, center, angleStep])

  const handleClick = (idx: number) => {
    setActiveIndex(idx)
  }

  return (
    <RingContainer ref={containerRef}>
      <RotatingRing style={{ transform: `rotate(${rotationAngle}rad)` }}>
        {markersData.map(({ index, left, top }) => {
          const isActive = index === activeIndex
          const isHovered = hoveredIndex === index

          return (
            <Marker
              key={index}
              className={`marker ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
              style={{ left: `${left}px`, top: `${top}px` }}
              onClick={() => handleClick(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              aria-pressed={isActive}
            >
              <MarkerText
                className={isActive || isHovered ? 'visible' : 'hidden'}
                style={{ transform: `rotate(${-rotationAngle}rad)` }}
              >
                {index + 1}
              </MarkerText>
            </Marker>
          )
        })}
      </RotatingRing>
    </RingContainer>
  )
}

const RingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(360px, 27vw, 530px);
  height: clamp(360px, 27vw, 530px);
  overflow: visible;

  @media (max-width: 599px) {
    display: none;
  }
`

const RotatingRing = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid rgba(48, 62, 88, 0.2);
  transition: transform 0.5s ease-in-out;
`

const Marker = styled.button`
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  width: 6px;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.blackBlue};

  &.active,
  &.hovered {
    width: clamp(25px, 2.5vw, 50px);
    height: clamp(25px, 2.5vw, 50px);
    background-color: ${({ theme }) => theme.colors.customWhite};
    border: 1px solid rgba(48, 62, 88, 0.5);
  }
`

const MarkerText = styled.span`
  font-size: clamp(12px, 1vw, 20px);
  color: ${({ theme }) => theme.colors.blackBlue};
  transition: opacity 0.3s ease;

  &.hidden {
    opacity: 0;
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  &.visible {
    opacity: 1;
  }
`

export default InteractiveRing

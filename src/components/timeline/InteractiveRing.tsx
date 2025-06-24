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

  const handleClick = (index: number) => {
    setActiveIndex(index)
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
              style={{ left: `${left}rem`, top: `${top}rem` }}
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

  width: clamp(16rem, 27vw, 33rem);
  height: clamp(16rem, 27vw, 33rem);

  overflow: visible;

  @media (max-width: ${({ theme }) => theme.size.small}) {
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

  width: 0.375rem;
  height: 0.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: none;
  cursor: pointer;

  transition: all 0.3s ease;

  background-color: ${({ theme }) => theme.colors.blackBlue};

  &.active,
  &.hovered {
    width: clamp(1.5rem, 2.5vw, 3.125rem);
    height: clamp(1.5rem, 2.5vw, 3.125rem);

    border: 1px solid rgba(48, 62, 88, 0.5);
    background-color: ${({ theme }) => theme.colors.customWhite};
  }
`

const MarkerText = styled.span`
  font-size: clamp(0.75rem, 1vw, 1.25rem);
  color: ${({ theme }) => theme.colors.blackBlue};
  transition: opacity 0.3s ease;

  &.hidden {
    position: absolute;
    width: 1px;
    height: 1px;

    opacity: 0;
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

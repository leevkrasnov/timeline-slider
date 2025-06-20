import { useMemo, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import { useDataContext } from '@/context/useDataContext'
import { getContainerSize } from '@/utils/getContainerSize'
import {
  getCoordinates,
  calculateMarkers,
  getActualCount,
} from '@/utils/geometryHelpers'

interface MarkerProps {
  $active: boolean
  $left: number
  $top: number
}

interface MarkerTextProps {
  $visible: boolean
  $rotationAngle: number
}

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
        {markersData.map(({ index, left, top }) => (
          <Marker
            key={index}
            $active={index === activeIndex}
            $left={left}
            $top={top}
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-pressed={index === activeIndex}
          >
            <MarkerText
              $visible={index === activeIndex || hoveredIndex === index}
              $rotationAngle={rotationAngle}
            >
              {index + 1}
            </MarkerText>
          </Marker>
        ))}
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

const Marker = styled.button<MarkerProps>`
  position: absolute;
  left: ${({ $left }) => `${$left}px`};
  top: ${({ $top }) => `${$top}px`};

  width: ${({ $active }) => ($active ? 'clamp(25px, 2.5vw, 50px)' : '6px')};
  height: ${({ $active }) => ($active ? 'clamp(25px, 2.5vw, 50px)' : '6px')};

  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.customWhite : theme.colors.blackBlue};
  border: ${({ $active }) =>
    $active ? '1px solid rgba(48, 62, 88, 0.5)' : 'none'};
  border-radius: 50%;

  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    ${({ $active }) =>
      !$active &&
      css`
        background-color: ${({ theme }) => theme.colors.customWhite};
        width: clamp(25px, 2.5vw, 50px);
        height: clamp(25px, 2.5vw, 50px);
        border: 1px solid rgba(48, 62, 88, 0.5);
      `}
  }
`

const MarkerText = styled.span<MarkerTextProps>`
  font-size: clamp(12px, 1vw, 20px);
  color: ${({ theme }) => theme.colors.blackBlue};
  transform: rotate(${({ $rotationAngle }) => -$rotationAngle}rad);
  ${({ $visible }) =>
    !$visible &&
    css`
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    `}
`

export default InteractiveRing

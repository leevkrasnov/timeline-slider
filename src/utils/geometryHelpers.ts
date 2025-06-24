import { MAX_PERIODS_COUNT } from '@/data/periods'

export interface MarkerPosition {
  index: number
  left: number
  top: number
}

export const getActualCount = (periodsLength: number) => {
  return Math.min(periodsLength, MAX_PERIODS_COUNT)
}

export const getCoordinates = (
  size: number,
  activeIndex: number,
  actualCount: number
): {
  rotationAngle: number
  radius: number
  center: number
  angleStep: number
} => {
  const startAngle = (7 * Math.PI) / 4
  const angleStep = (2 * Math.PI) / actualCount
  const radius = size / 2
  const center = size / 2
  const rotationAngle = startAngle - angleStep * activeIndex

  return {
    rotationAngle,
    radius,
    center,
    angleStep,
  }
}

export function calculateMarkers({
  count,
  radius,
  center,
  angleStep,
}: {
  count: number
  radius: number
  center: number
  angleStep: number
}): MarkerPosition[] {
  const markers: MarkerPosition[] = []

  for (let i = 0; i < count; i++) {
    const angle = angleStep * i
    // деления на 16 для перевода 'px' to 'rem'
    const left = (center + radius * Math.cos(angle)) / 16
    const top = (center + radius * Math.sin(angle)) / 16

    markers.push({ index: i, left, top })
  }

  return markers
}

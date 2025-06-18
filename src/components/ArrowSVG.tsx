import styled from 'styled-components'

interface ArrowSVGProps {
  direction?: 'left' | 'right'
  color: string
  size: number
  strokeWidth: number
}

// Стилизованный SVG-компонент
const StyledSVG = styled.svg<ArrowSVGProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  transform: ${(props) =>
    props.direction === 'left' ? 'rotate(180deg)' : 'rotate(0deg)'};
`

// Компонент стрелки
const ArrowSVG = ({
  direction = 'right',
  color = '#3877EE',
  size = 12,
  strokeWidth = 2,
}: ArrowSVGProps) => {
  return (
    <StyledSVG
      direction={direction}
      color={color}
      size={size}
      strokeWidth={strokeWidth}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L6 6L1 11" stroke={color} strokeWidth={strokeWidth} />
    </StyledSVG>
  )
}

export default ArrowSVG

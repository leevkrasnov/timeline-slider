import styled from 'styled-components'

interface ArrowSVGProps {
  direction?: 'left' | 'right'
  color: string
}

const ArrowSVG = ({
  direction = 'right',
  color = '#3877EE',
}: ArrowSVGProps) => {
  return (
    <StyledSVG
      direction={direction}
      color={color}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L6 6L1 11" stroke={color} strokeWidth={2} />
    </StyledSVG>
  )
}

const StyledSVG = styled.svg<ArrowSVGProps>`
  width: 12px;
  height: 12px;
  transform: ${(props) =>
    props.direction === 'left' ? 'rotate(180deg)' : 'rotate(0deg)'};

  @media (max-width: 768px) {
    width: 6.25px;
    height: 6.25px;
  }
`

export default ArrowSVG

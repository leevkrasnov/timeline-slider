import styled, { keyframes } from 'styled-components'

const LoadingSpinner = () => {
  return (
    <RingWrapper>
      <StyledSvg viewBox="0 0 100 100">
        <Circle cx="50" cy="50" r="45" strokeWidth={5} />
      </StyledSvg>
    </RingWrapper>
  )
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const RingWrapper = styled.div`
  width: 100%;
  height: 8.75rem;
  margin-top: clamp(1.25rem, 4vh, 3rem);
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledSvg = styled.svg`
  width: 1.875rem;
  height: 1.875rem;
  animation: ${spin} 1s linear infinite;

  @media (max-width: 37rem) {
    width: 1rem;
    height: 1rem;
  }
`

const Circle = styled.circle`
  fill: none;
  stroke: ${({ theme }) => theme.colors.blackBlue};
  stroke-linecap: round;

  stroke-dasharray: 220;
`

export default LoadingSpinner

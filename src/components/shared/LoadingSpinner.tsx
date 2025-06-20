import styled, { keyframes } from 'styled-components'

const LoadingSpinner = () => {
  return (
    <RingWrapper>
      <StyledSvg viewBox="0 0 100 100">
        <Circle cx="50" cy="50" r="45" />
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
  height: 100%;
  margin-top: clamp(20px, 4vh, 50px);
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledSvg = styled.svg`
  width: 30px;
  height: 30px;
  animation: ${spin} 1s linear infinite;

  @media (max-width: 599px) {
    width: 16px;
    height: 16px;
  }
`

const Circle = styled.circle`
  fill: none;
  stroke-width: 2px;
  stroke: ${({ theme }) => theme.colors.blackBlue};
  stroke-linecap: round;

  stroke-dasharray: 220;
`

export default LoadingSpinner

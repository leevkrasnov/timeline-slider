import styled from 'styled-components'

import Title from './Title'
import YearsView from './YearsView'
import Navigation from './Navigation'
import CardsLayout from './CardsLayout'

const Dashboard = () => {
  return (
    <Container>
      <LinesWrapper>
        <VerticalLine />
        <HorizontalLine />
      </LinesWrapper>

      <Title />
      <YearsView />
      <Navigation />
      <CardsLayout />
    </Container>
  )
}

const Container = styled.div`
  position: relative;

  border-left: 1px solid rgba(66, 86, 122, 0.1);
  border-right: 1px solid rgba(66, 86, 122, 0.1);

  width: min(75vw, 100%);
  height: 100%;
  margin-left: clamp(16px, 17vw, 320px);

  background-color: ${({ theme }) => theme.colors.customWhite};
`

const LinesWrapper = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`

const VerticalLine = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  z-index: -1;

  background-color: rgba(66, 86, 122, 0.1);
`

const HorizontalLine = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(66, 86, 122, 0.1);
  height: 1px;
  z-index: -1;
`

export default Dashboard

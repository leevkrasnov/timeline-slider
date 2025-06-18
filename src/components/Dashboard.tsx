import styled from 'styled-components'

import TimelineHeader from './TimelineHeader'
import YearsDisplay from './YearsDisplay'
import NavControls from './NavControls'
import TimelineSidebar from './TimelineSidebar'
import InteractiveRing from './InteractiveRing'

const Dashboard = () => {
  return (
    <Container>
      <LinesWrapper>
        <VerticalLine />
        <HorizontalLine />
      </LinesWrapper>

      <ContentWrapper>
        <div>
          <TimelineHeader />
        </div>
        <div>
          <NavControls />
          <TimelineSidebar />
        </div>
      </ContentWrapper>
      <YearsDisplay />
      <InteractiveRing />
    </Container>
  )
}

const Container = styled.div`
  position: relative;

  border-left: 1px solid rgba(66, 86, 122, 0.1);
  border-right: 1px solid rgba(66, 86, 122, 0.1);

  width: min(75vw, 100%);
  min-height: 100vh;
  margin-left: clamp(16px, 17vw, 320px);

  background-color: ${({ theme }) => theme.colors.customWhite};
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  min-height: 100vh;
  padding-top: clamp(60px, 16vh, 170px);
  padding-bottom: clamp(20px, 5vh, 60px);
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
`

export default Dashboard

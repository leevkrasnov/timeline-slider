import styled from 'styled-components'

import TimelineHeader from './timeline/TimelineHeader'
import YearsDisplay from './timeline/YearsDisplay'
import NavControls from './timeline/NavControls'
import TimelineSidebar from './timeline/TimelineSidebar'
import InteractiveRing from './timeline/InteractiveRing'
import MobilePagination from './timeline/MobilePagination'

import { ContextProvider } from '../context/useDataContext'

const Dashboard = () => {
  return (
    <Container>
      <LinesWrapper aria-hidden="true">
        <VerticalLine aria-hidden="true" />
        <HorizontalLine aria-hidden="true" />
      </LinesWrapper>

      <ContentWrapper>
        <header>
          <TimelineHeader />
        </header>
        <ContextProvider>
          <YearsDisplay />
          <MobileDisplayLine />
          <InteractiveRing />
          <nav aria-label="Навигация по периодам">
            <NavControls />
            <TimelineSidebar />
            <MobilePagination aria-hidden="true" />
          </nav>
        </ContextProvider>
      </ContentWrapper>
    </Container>
  )
}

const Container = styled.div`
  position: relative;

  border-left: 1px solid rgba(66, 86, 122, 0.1);
  border-right: 1px solid rgba(66, 86, 122, 0.1);

  width: min(75vw, 100%);
  min-height: 100dvh;
  margin-left: clamp(16px, 17vw, 320px);

  background-color: ${({ theme }) => theme.colors.customWhite};

  @media (max-width: 599px) {
    margin-left: 0;
    padding-left: 20px;
    border-left: none;
    border-right: none;
    width: 100vw;
  }
`

const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  min-height: 100vh;
  padding-top: clamp(60px, 16vh, 170px);
  padding-bottom: clamp(20px, 5vh, 60px);

  @media (max-width: 599px) {
    padding-top: 60px;
    justify-content: flex-start;
  }
`

const LinesWrapper = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  @media (max-width: 599px) {
    display: none;
  }
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

const MobileDisplayLine = styled.div`
  display: none;

  @media (max-width: 599px) {
    display: block;
    width: calc(100% - 20px);
    height: 1px;

    margin-top: 60px;
    background-color: #c7cdd9;
  }
`

export default Dashboard

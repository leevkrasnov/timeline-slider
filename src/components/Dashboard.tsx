import styled from 'styled-components'
import React, { Suspense } from 'react'

import YearsDisplay from './timeline/YearsDisplay'
import NavControls from './timeline/NavControls'
import MobilePagination from './timeline/MobilePagination'
import LoadingSpinner from './shared/LoadingSpinner'
import InteractiveRing from './timeline/InteractiveRing'

import { ContextProvider } from '../context/useDataContext'

const SliderSidebar = React.lazy(() => import('./timeline/SliderSidebar'))

const Dashboard = () => {
  return (
    <>
      <LinesWrapper aria-hidden="true">
        <VerticalLine aria-hidden="true" />
        <HorizontalLine aria-hidden="true" />
      </LinesWrapper>

      <ContentWrapper>
        <ContextProvider>
          <YearsDisplay />

          <nav aria-label="Навигация по периодам">
            <MobileDisplayHorizontalLine />
            <NavControls />

            <Suspense fallback={<LoadingSpinner />}>
              <SliderSidebar />
            </Suspense>

            <MobilePagination aria-hidden="true" />
          </nav>

          <InteractiveRing />
        </ContextProvider>
      </ContentWrapper>
    </>
  )
}

const ContentWrapper = styled.main`
  width: 100%;

  padding-top: clamp(3.75rem, 16vh, 10.625rem);
  padding-bottom: clamp(1.25rem, 5vh, 3.75rem);

  @media (max-width: ${({ theme }) => theme.size.small}) {
    padding-top: 3.75rem;
  }
`

const LinesWrapper = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.size.small}) {
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

  height: 1px;

  background-color: rgba(66, 86, 122, 0.1);
`

const MobileDisplayHorizontalLine = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.size.small}) {
    display: block;

    width: calc(100% - 20px);
    height: 1px;

    margin-top: 3.75rem;
    background-color: #c7cdd9;
  }
`

export default Dashboard

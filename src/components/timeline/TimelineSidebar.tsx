import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Navigation, A11y, FreeMode } from 'swiper/modules'
import styled from 'styled-components'

import { useDataContext } from '@/context/useDataContext'
import TimelineCard from './TimelineCard'
import ArrowSVG from '@/components/shared/ArrowSVG'

import 'swiper/css'
import 'swiper/css/navigation'

import type { IData } from '@/data/periods'
import type { Swiper as SwiperType } from 'swiper'

const TimelineSidebar = () => {
  const { events } = useDataContext()

  const [isVisible, setIsVisible] = useState<boolean>(true)
  const [displayEvents, setDisplayEvents] = useState<IData[]>(events)

  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    setIsVisible(false)

    const timer = setTimeout(() => {
      setDisplayEvents(events)

      setIsVisible(true)
      swiperRef.current?.slideTo(0)
    }, 300)
    return () => clearTimeout(timer)
  }, [events])

  return (
    <TimelineSliderSection role="region" aria-label="Исторические события">
      {events.length > 0 ? (
        <>
          <NavigationButton
            className="prev-button"
            type="button"
            aria-label="Предыдущий слайд"
          >
            <ArrowSVG direction="left" color="#3877EE" />
          </NavigationButton>

          <StyledSwiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            $isVisible={isVisible}
            modules={[Navigation, A11y, Keyboard, FreeMode]}
            navigation={{
              prevEl: '.prev-button',
              nextEl: '.next-button',
            }}
            keyboard={{
              enabled: true,
            }}
            freeMode={true}
            slidesPerView="auto"
            spaceBetween={60}
            a11y={{
              enabled: true,
              prevSlideMessage: 'Предыдущий слайд',
              nextSlideMessage: 'Следующий слайд',
            }}
            slideNextClass="swiper-slide-next"
          >
            {displayEvents.map((item) => (
              <SwiperSlide key={item.id} style={{ width: 'auto' }}>
                <TimelineCard year={item.year} description={item.description} />
              </SwiperSlide>
            ))}
          </StyledSwiper>

          <NavigationButton
            className="next-button"
            type="button"
            aria-label="Следующий слайд"
          >
            <ArrowSVG direction="right" color="#3877EE" />
          </NavigationButton>
        </>
      ) : (
        <NoEventsMessage>В этом периоде не было событий</NoEventsMessage>
      )}
    </TimelineSliderSection>
  )
}

const TimelineSliderSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 100%;
  height: 140px;
  margin-top: clamp(20px, 4vh, 50px);
  z-index: 10;
`

const StyledSwiper = styled(Swiper)<{ $isVisible: boolean }>`
  height: clamp(120px, 12.5vh, 135px);
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;

  .swiper-slide-next {
    @media (max-width: 599px) {
      opacity: 0.5;
    }
  }
`

const NoEventsMessage = styled.div`
  font-size: clamp(14px, 1.5vw, 24px);
  color: rgba(66, 86, 122, 0.5);
  font-style: italic;
`

const NavigationButton = styled.button`
  flex-shrink: 0;
  width: clamp(36px, 3vw, 40px);
  height: clamp(36px, 3vw, 40px);
  margin-inline: clamp(10px, 1vw, 20px);

  border-radius: 50%;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  box-shadow: 0 0 15px rgba(56, 119, 238, 0.1);
  transition: opacity 0.3s ease-in-out;
  &.swiper-button-disabled {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  @media (max-width: 599px) {
    display: none;
  }
`

export default TimelineSidebar

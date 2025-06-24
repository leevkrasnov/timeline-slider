import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Keyboard,
  Navigation,
  A11y,
  FreeMode,
  Mousewheel,
} from 'swiper/modules'
import styled from 'styled-components'

import { useDataContext } from '@/context/useDataContext'
import SliderCard from './SliderCard'
import ArrowSVG from '@/components/shared/ArrowSVG'

import 'swiper/css'
import 'swiper/css/navigation'

import type { IData } from '@/data/periods'
import type { Swiper as SwiperType } from 'swiper'

const SliderSidebar = () => {
  const { events } = useDataContext()

  const [isVisible, setIsVisible] = useState<boolean>(false)
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
      {displayEvents.length > 0 ? (
        <>
          <NavigationButton
            className="prev-button"
            type="button"
            aria-label="Предыдущий слайд"
          >
            <ArrowSVG direction="left" color="#3877EE" />
          </NavigationButton>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            grabCursor={true}
            modules={[Navigation, A11y, Keyboard, FreeMode, Mousewheel]}
            navigation={{
              prevEl: '.prev-button',
              nextEl: '.next-button',
            }}
            keyboard={{
              enabled: true,
            }}
            mousewheel={true}
            freeMode={true}
            slidesPerView="auto"
            a11y={{
              enabled: true,
              prevSlideMessage: 'Предыдущий слайд',
              nextSlideMessage: 'Следующий слайд',
            }}
            slideNextClass="swiper-slide-next"
          >
            {displayEvents.map((item) => (
              <SwiperSlide
                key={item.id}
                style={{
                  width: 'auto',
                  opacity: isVisible ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out',
                }}
              >
                <SliderCard year={item.year} description={item.description} />
              </SwiperSlide>
            ))}
          </Swiper>

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
  height: 8.75rem;
  margin-top: clamp(1.25rem, 4vh, 3rem);

  display: flex;
  align-items: center;

  z-index: 10;

  @media (max-width: ${({ theme }) => theme.size.small}) {
    margin-top: 0.5rem;
  }
`

const NoEventsMessage = styled.div`
  font-size: clamp(0.875rem, 1.5vw, 1.5rem);
  color: rgba(66, 86, 122, 0.5);
  font-style: italic;
`

const NavigationButton = styled.button`
  width: clamp(1.75rem, 2.5vw, 2.5rem);
  height: clamp(1.75rem, 2.5vw, 2.5rem);

  margin-inline: clamp(1.25rem, 1vw, 1.875rem);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  border-radius: 50%;
  border: none;
  cursor: pointer;

  background-color: #fff;
  box-shadow: 0 0 15px rgba(56, 119, 238, 0.1);

  transition: opacity 0.3s ease-in-out;

  &.swiper-button-disabled {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.size.small}) {
    display: none;
  }
`

export default SliderSidebar

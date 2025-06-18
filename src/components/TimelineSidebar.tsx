import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper/modules'
import styled from 'styled-components'
import 'swiper/css'
import 'swiper/css/navigation'

import { data } from '../data'
import TimelineCard from './TimelineCard'
import ArrowSVG from './ArrowSVG'

const TimelineSlider = () => {
  return (
    <TimelineSliderSection role="region" aria-label="Исторические события">
      <NavigationButton
        className="prev-button"
        type="button"
        aria-label="Предыдущий слайд"
      >
        <ArrowSVG direction="left" color="#3877EE" size={12} strokeWidth={2} />
      </NavigationButton>

      <StyledSwiper
        modules={[Navigation, A11y]}
        navigation={{
          prevEl: '.prev-button',
          nextEl: '.next-button',
        }}
        breakpoints={{
          1440: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 60,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 40,
          },
        }}
        a11y={{
          enabled: true,
          prevSlideMessage: 'Предыдущий слайд',
          nextSlideMessage: 'Следующий слайд',
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <TimelineCard year={item.year} description={item.description} />
          </SwiperSlide>
        ))}
      </StyledSwiper>

      <NavigationButton
        className="next-button"
        type="button"
        aria-label="Следующий слайд"
      >
        <ArrowSVG direction="right" color="#3877EE" size={10} strokeWidth={2} />
      </NavigationButton>
    </TimelineSliderSection>
  )
}

const TimelineSliderSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: min(75vw, 1440px)
  height: clamp(120px, 12.5vh, 135px);
  margin-top: clamp(20px, 4vh, 50px);
`

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: clamp(120px, 12.5vh, 135px);
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
  transition: opacity 0.2s ease-in-out;
  &.swiper-button-disabled {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
`

export default TimelineSlider

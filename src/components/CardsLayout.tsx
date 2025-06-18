import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper/modules'
import styled from 'styled-components'
import 'swiper/css'
import 'swiper/css/navigation'

import { data } from '../data'
import CardView from './CardView'
import ArrowSVG from './ArrowSVG'

const SwiperContainer = styled.section`
  position: absolute;
  top: min(78vh, 840px);
  width: min(75vw, 1440px);
  height: min(12.5vh, 135px);

  display: flex;
  align-items: center;
  justify-content: space-between;

  & .prev-button,
  & .next-button {
    transition: opacity 0.2s ease-in-out;
    opacity: 1;
  }

  & .prev-button.swiper-button-disabled,
  & .next-button.swiper-button-disabled {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
`

const StyledSwiper = styled(Swiper)`
  width: min(75vw, 1280px);
`

const NavButton = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(56, 119, 238, 0.1);
`

const CardsLayout = () => {
  return (
    <SwiperContainer>
      <NavButton className="prev-button">
        <ArrowSVG direction="left" color="#3877EE" size={12} strokeWidth={2} />
      </NavButton>
      <StyledSwiper
        modules={[Navigation, A11y]}
        navigation={{
          prevEl: '.prev-button',
          nextEl: '.next-button',
        }}
        spaceBetween={80}
        slidesPerView={3}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <CardView year={item.year} description={item.description} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <NavButton className="next-button">
        <ArrowSVG direction="right" color="#3877EE" size={12} strokeWidth={2} />
      </NavButton>
    </SwiperContainer>
  )
}

export default CardsLayout

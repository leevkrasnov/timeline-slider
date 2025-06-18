import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import styled from 'styled-components'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const AppSwiper = () => {
  return (
    <SwiperContainer>
      <NavButton className="prev-button">Prev</NavButton>
      <StyledSwiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView="auto"
        navigation={{
          prevEl: '.prev-button',
          nextEl: '.next-button',
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
      </StyledSwiper>
      <NavButton className="next-button">Next</NavButton>
    </SwiperContainer>
  )
}

const SwiperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const StyledSwiper = styled(Swiper)`
  width: 80%;
`

const NavButton = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #ccc;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: white;
`

export default AppSwiper

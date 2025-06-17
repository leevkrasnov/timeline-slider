import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import styled from 'styled-components'
import 'swiper/css'
import 'swiper/css/navigation'

import { data } from '../data'
import CardView from './CardView'

const SwiperContainer = styled.section`
  position: absolute;
  top: min(78vh, 840px);
  width: min(75vw, 1440px);
  height: min(12.5vh, 135px);
  border: 1px solid red;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next,
  .swiper-button-prev {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;

    color: ${({ theme }) => theme.colors.customBlue};
    background-color: red;
    box-shadow: 0 0 15px rgba(56, 119, 238, 0.1);
    transition: box-shadow 0.2s ease-in-out;

    &:hover {
      box-shadow: 0 0 15px rgba(56, 119, 238, 0.2);
    }

    &::after {
      font-size: 10px;
      font-weight: 700;
    }
  }

  @media (max-width: 768px) {
    .swiper-button-next,
    .swiper-button-prev {
      width: 25px;
      height: 25px;
    }
  }
`

const CardsLayout = () => {
  return (
    <SwiperContainer>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={80} // соответствует column-gap: min(4vw, 80px)
        slidesPerView={3} // отображаем 3 карточки одновременно, можно настроить
        // breakpoints={{
        //   320: {
        //     slidesPerView: 1,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 2,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 3,
        //     spaceBetween: 80,
        //   },
        // }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <CardView year={item.year} description={item.description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  )
}

export default CardsLayout

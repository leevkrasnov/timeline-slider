import styled from 'styled-components'

import { useDataContext } from '@/context/useDataContext'
import NavArrows from './NavArrows'
import MobilePagination from './MobilePagination'

const NavControls = () => {
  const { activeIndex } = useDataContext()

  return (
    <Wrapper>
      <SlideIndicator>
        {String(activeIndex + 1).padStart(2, '0')}/06
      </SlideIndicator>
      <NavArrows />
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: clamp(60px, 6vw, 120px);
  height: clamp(50px, 8vh, 90px);
  margin-inline: clamp(16px, 4vw, 80px);

  @media (max-width: 768px) {
    position: absolute;
    left: 20px;
    bottom: 15px;
    margin-inline: 0;
  }
`

const SlideIndicator = styled.span`
  font-size: 14px;
  font-weight: 400;
`

export default NavControls

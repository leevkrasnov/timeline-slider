import styled from 'styled-components'

import NavArrows from './NavArrows'
import { useDataContext } from '@/context/useDataContext'
import { MAX_PERIODS_COUNT } from '@/data/periods'
import { formatNum } from '@/utils/formatNum'

const NavControls = () => {
  const { activeIndex } = useDataContext()

  return (
    <Wrapper>
      <SlideIndicator>
        {formatNum(activeIndex + 1)}/{formatNum(MAX_PERIODS_COUNT)}
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

  @media (max-width: 599px) {
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

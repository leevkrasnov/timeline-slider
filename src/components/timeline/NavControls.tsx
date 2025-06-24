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
  width: clamp(4rem, 6vw, 7.5rem);
  height: clamp(3.5rem, 5vw, 5.625rem);

  margin-left: clamp(1rem, 4vw, 5rem);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.size.small}) {
    position: absolute;

    left: 1.25rem;
    bottom: 1rem;

    margin-inline: 0;
  }
`

const SlideIndicator = styled.span`
  font-size: 0.875rem;
`

export default NavControls

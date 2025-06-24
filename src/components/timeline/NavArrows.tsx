import styled from 'styled-components'

import { useDataContext } from '@/context/useDataContext'
import ArrowSVG from '@/components/shared/ArrowSVG'

const NavArrows = () => {
  const { next, prev, activeIndex, periodsLength } = useDataContext()

  const isFirst = activeIndex === 0
  const isLast = activeIndex === periodsLength - 1

  return (
    <ButtonGroup>
      <NavArrow
        aria-label="Предыдущий временной период"
        onClick={isFirst ? undefined : prev}
        disabled={isFirst}
      >
        <ArrowSVG direction="left" color="#42567A" />
      </NavArrow>
      <NavArrow
        aria-label="Следующий временной период"
        onClick={isLast ? undefined : next}
        disabled={isLast}
      >
        <ArrowSVG direction="right" color="#42567A" />
      </NavArrow>
    </ButtonGroup>
  )
}

const ButtonGroup = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`

const NavArrow = styled.button`
  width: clamp(1.75rem, 2.5vw, 3.125rem);
  height: clamp(1.75rem, 2.5vw, 3.125rem);

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.5);
  background-color: ${({ theme }) => theme.colors.customWhite};

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: pointer;

  transition:
    background-color 0.3s ease,
    opacity 0.3s ease;

  &:hover {
    background-color: #fff;
  }
`

export default NavArrows

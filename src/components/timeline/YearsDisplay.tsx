import styled, { css } from 'styled-components'

import { useDataContext } from '@/context/useDataContext'
import AnimatedCounter from '@/components/shared/AnimationNumbers'

const YearsDisplay = () => {
  const { years, currentPeriod } = useDataContext()

  return (
    <Wrapper>
      <Year>
        <AnimatedCounter
          initialValue={years.from}
          targetValue={currentPeriod.from}
        />
      </Year>
      <Year $variant="end">
        <AnimatedCounter
          initialValue={years.to}
          targetValue={currentPeriod.to}
        />
      </Year>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: clamp(17.5rem, 50vw, 60rem);

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.size.small}) {
    top: 45%;
    justify-content: center;
    column-gap: 1.5rem;
  }
`

const yearBase = css`
  font-size: clamp(3.5rem, 10vw, 12.5rem);
  font-weight: 700;
  line-height: 1.6;
  letter-spacing: -0.02em;
  white-space: nowrap;

  cursor: default;
`

const Year = styled.h2<{ $variant?: 'end' }>`
  ${yearBase};
  color: ${({ theme, $variant }) =>
    $variant === 'end' ? theme.colors.fuschia : theme.colors.iris};
`

export default YearsDisplay

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

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: clamp(280px, 50vw, 970px);
`

const yearBase = css`
  font-size: clamp(60px, 10vw, 200px);
  font-weight: 700;
  line-height: 1.6;
  letter-spacing: -0.02em;
  white-space: nowrap;
  cursor: default;
`

const Year = styled.span<{ $variant?: 'end' }>`
  ${yearBase};
  color: ${({ theme, $variant }) =>
    $variant === 'end' ? theme.colors.fuschia : theme.colors.iris};
`

export default YearsDisplay

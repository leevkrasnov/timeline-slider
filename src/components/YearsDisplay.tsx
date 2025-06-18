import styled, { css } from 'styled-components'

const YearsDisplay = () => {
  return (
    <Wrapper>
      <Year>2014</Year>
      <Year $variant="end">2020</Year>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: clamp(280px, 50vw, 970px);
  margin: clamp(20px, 6vh, 60px) auto;
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

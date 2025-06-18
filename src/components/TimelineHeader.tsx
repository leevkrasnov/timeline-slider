import styled from 'styled-components'

const TimelineHeader = () => {
  return (
    <Wrapper>
      <GradientBar aria-hidden="true" />
      <Title>
        Исторические <br /> даты
      </Title>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  column-gap: clamp(16px, 4vw, 80px);
  height: clamp(60px, 6vw, 120px);
  margin-top: clamp(60px, 16vh, 170px);
`

const GradientBar = styled.span`
  height: 100%;
  border-left: clamp(2px, 0.3vw, 5px) solid;
  border-image-source: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.customBlue} 0%,
    ${({ theme }) => theme.colors.fuschia} 100%
  );
  border-image-slice: 1;
`

const Title = styled.h1`
  font-size: clamp(28px, 2.9vw, 56px);
  line-height: 120%;
  font-weight: 700;
`

export default TimelineHeader

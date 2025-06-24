import React from 'react'
import styled from 'styled-components'

const HeaderTitle = () => {
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
  height: clamp(3.125rem, 6vw, 7.5rem);

  display: flex;
  align-items: center;
  column-gap: clamp(1rem, 4vw, 5rem);
`

const GradientBar = styled.span`
  height: 100%;

  border-left: clamp(0.125rem, 0.3vw, 0.3rem) solid;
  border-image-source: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.customBlue} 0%,
    ${({ theme }) => theme.colors.fuschia} 100%
  );
  border-image-slice: 1;

  @media (max-width: ${({ theme }) => theme.size.small}) {
    display: none;
  }
`

const Title = styled.h1`
  font-size: clamp(1.75rem, 2.9vw, 3.5rem);
  line-height: 1.2;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.size.small}) {
    font-size: 1.25rem;
  }
`

export default React.memo(HeaderTitle)

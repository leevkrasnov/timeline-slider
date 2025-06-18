import styled, { css } from 'styled-components'

const YearsView = () => {
  return (
    <Container>
      <YearsContainer>
        <FirstYear>2014</FirstYear>
        <SecondYear>2020</SecondYear>
      </YearsContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const YearsContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: min(50vw, 970px);
  height: auto;
`

const YearStyle = css`
  font-size: min(10vw, 200px);
  font-weight: 700;
  line-height: 1.6;
  letter-spacing: -0.02em;
  z-index: 10;
  cursor: default;
`

const FirstYear = styled.span`
  ${YearStyle}
  color: ${({ theme }) => theme.colors.iris};
`

const SecondYear = styled.span`
  ${YearStyle}
  color: ${({ theme }) => theme.colors.fuschia};
`

export default YearsView

import styled from 'styled-components'

const Title = () => {
  return (
    <Container>
      <GradientLine />
      <Text>
        Исторические <br /> даты
      </Text>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: min(16vh, 170px);
  display: inline-flex;
  align-items: center;
  column-gap: min(4vw, 80px);
  height: min(6vw, 120px);
`

const GradientLine = styled.span`
  height: 100%;

  border-left: min(0.3vw, 5px) solid;
  border-image-source: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.blue} 0%,
    ${({ theme }) => theme.colors.fuschia} 100%
  );
  border-image-slice: 1;
`

const Text = styled.h1`
  font-family: 'PT Sans', sans-serif;
  line-height: 120%;
  font-weight: 700;
  font-size: min(2.9vw, 56px);
  color: ${({ theme }) => theme.colors.blackBlue};
`

export default Title

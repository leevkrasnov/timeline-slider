import styled from 'styled-components'

interface CardViewProps {
  year: number
  description: string
}

const CardView = ({ year, description }: CardViewProps) => {
  return (
    <Container>
      <Title>{year}</Title>
      <Text>{description}</Text>
    </Container>
  )
}

const Container = styled.article`
  height: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 15px;
`

const Title = styled.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: min(1.3vw, 25px);
  line-height: 1.2;
  cursor: default;

  color: ${({ theme }) => theme.colors.customBlue};
`

const Text = styled.span`
  word-break: break-word;
  white-space: normal;

  font-size: min(1.2vw, 20px);
  line-height: 1.5;
  cursor: default;

  color: ${({ theme }) => theme.colors.blackBlue};
`

export default CardView

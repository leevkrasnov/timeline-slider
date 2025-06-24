import styled from 'styled-components'

interface TimelineCardProps {
  year: number
  description: string
}

const TimelineCard = ({ year, description }: TimelineCardProps) => {
  return (
    <CardContainer aria-labelledby={`Год-${year}`}>
      <YearTitle id={`Год-${year}`}>{year}</YearTitle>

      <EventDescription>{description}</EventDescription>
    </CardContainer>
  )
}

const CardContainer = styled.article`
  height: 100%;

  width: auto;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: clamp(8px, 1.2vh, 15px);

  @media (max-width: 599px) {
    max-width: 200px;
  }
`

const YearTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(16px, 1.3vw, 25px);
  line-height: 1.2;

  color: ${({ theme }) => theme.colors.customBlue};
`

const EventDescription = styled.p`
  word-break: break-word;
  white-space: normal;
  margin: 0;

  font-size: clamp(14px, 1.2vw, 20px);
  line-height: 1.5;
`

export default TimelineCard

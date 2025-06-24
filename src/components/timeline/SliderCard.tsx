import styled from 'styled-components'

interface TimelineCardProps {
  year: number
  description: string
}

const SliderCard = ({ year, description }: TimelineCardProps) => {
  return (
    <CardContainer aria-labelledby={`Год-${year}`}>
      <YearTitle id={`Год-${year}`}>{year}</YearTitle>

      <EventDescription>{description}</EventDescription>
    </CardContainer>
  )
}

const CardContainer = styled.article`
  width: auto;
  max-width: 25rem;

  padding-right: clamp(1.5rem, 4vw, 5rem);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: clamp(0.5rem, 1.2vh, 1rem);

  @media (max-width: ${({ theme }) => theme.size.small}) {
    max-width: 15rem;
  }
`

const YearTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1rem, 1.3vw, 1.5rem);
  line-height: 1.2;

  color: ${({ theme }) => theme.colors.customBlue};
`

const EventDescription = styled.p`
  margin: 0;

  font-size: clamp(0.875rem, 1.2vw, 1.25rem);
  line-height: 1.5;
  word-break: break-word;
  white-space: normal;
`

export default SliderCard

import styled from 'styled-components'
import { useDataContext } from '@/context/useDataContext'

const MobilePagination = () => {
  const { periods, activeIndex, goTo } = useDataContext()

  return (
    <Wrapper role="navigation" aria-label="Пагинация периодов">
      {periods.map((_, index) => (
        <Dot
          key={index}
          aria-label={`Перейти к периоду ${index + 1}`}
          $isActive={index === activeIndex}
          onClick={() => goTo(index)}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.size.small}) {
    position: relavite;

    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.625rem;

    padding-right: 1.25rem;
    margin-top: 2.5rem;
  }
`

const Dot = styled.button<{ $isActive: boolean }>`
  width: 0.375rem;
  height: 0.375rem;

  padding: 0;

  border-radius: 50%;
  border: none;

  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.blackBlue : 'rgba(66,86,122,0.4)'};
  transition: background-color 0.2s ease-in-out;

  cursor: pointer;
`

export default MobilePagination

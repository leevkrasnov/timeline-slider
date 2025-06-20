import styled from 'styled-components'
import { useDataContext } from '@/context/useDataContext'

const MobilePagination = () => {
  const { periods, activeIndex, goTo } = useDataContext()

  return (
    <Wrapper role="navigation" aria-label="Пагинация периодов">
      {periods.map((_, idx) => (
        <Dot
          key={idx}
          aria-label={`Перейти к периоду ${idx + 1}`}
          isActive={idx === activeIndex}
          onClick={() => goTo(idx)}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: none;

  @media (max-width: 599px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 20px;
    padding-top: 40px;

    gap: 10px;
  }
`

const Dot = styled.button<{ isActive: boolean }>`
  width: 6px;
  height: 6px;
  padding: 0;
  border-radius: 50%;
  border: none;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.blackBlue : 'rgba(66,86,122,0.4)'};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
`

export default MobilePagination

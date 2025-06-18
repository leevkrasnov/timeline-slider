import styled from 'styled-components'

const NavArrows = () => {
  return (
    <ButtonGroup>
      <NavArrow aria-label="Предыдущий временной период">{'<'}</NavArrow>
      <NavArrow aria-label="Следующий временной период">{'>'}</NavArrow>
    </ButtonGroup>
  )
}

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const NavArrow = styled.button`
  width: clamp(30px, 2.5vw, 50px);
  height: clamp(30px, 2.5vw, 50px);

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.5);
  background-color: ${({ theme }) => theme.colors.customWhite};

  font-size: 18px;
  line-height: 1;
  cursor: pointer;
`

export default NavArrows

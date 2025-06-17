import styled from 'styled-components'

const NavButton = () => {
  return (
    <Container>
      <Button>{'<'}</Button>
      <Button>{'>'}</Button>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: auto;

  display: inline-flex;
  justify-content: space-between;
`

const Button = styled.button`
  width: min(2.5vw, 50px);
  height: min(2.5vw, 50px);

  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.customWhite};
`

export default NavButton

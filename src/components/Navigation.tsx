import styled from 'styled-components'
import NavButton from './NavButton'

const Navigation = () => {
  return (
    <Container>
      <Text>06/06</Text>

      <NavButton />
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: min(65vh, 700px);
  margin-left: min(4vw, 80px);

  width: min(6vw, 120px);
  height: min(8vh, 90px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

const Text = styled.span`
  font-size: min(0.7vw, 14px);
  font-weight: 400;
`

export default Navigation

import styled from 'styled-components'
import NavArrows from './NavArrows'

const NavControls = () => {
  return (
    <Wrapper>
      <SlideIndicator>06/06</SlideIndicator>
      <NavArrows />
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: clamp(60px, 6vw, 120px);
  height: clamp(70px, 8vh, 90px);
  margin-inline: clamp(16px, 4vw, 80px);
`

const SlideIndicator = styled.span`
  font-size: clamp(10px, 0.7vw, 14px);
  font-weight: 400;
`

export default NavControls

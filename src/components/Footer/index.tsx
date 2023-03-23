import styled from 'styled-components'
import { Wrapper } from '../styled'

const Footer = styled.footer`
  display: flex;
  background-color: #70d0b3;
  min-height: 120px;
`

const FooterComponent = () => {
  return (
    <Footer>
      <Wrapper>Pasichnyk Vasyl</Wrapper>
    </Footer>
  )
}

export default FooterComponent

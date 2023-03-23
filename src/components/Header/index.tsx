import { ROUTES } from '@/services/routes'
import Link from 'next/link'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  background-color: #e0dcdc;
`
const HeaderWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: space-around;
`

const HeaderComponent = () => {
  return (
    <Header>
      <HeaderWrapper>
        <Link href={ROUTES.HOME}>
          <div>Logo</div>
        </Link>
      </HeaderWrapper>
    </Header>
  )
}

export default HeaderComponent

import FooterComponent from '@/components/Footer'
import HeaderComponent from '@/components/Header'
import { Wrapper } from '@/components/styled'
import { ReactNode } from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`
const MainConatianer = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
`

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <MainWrapper>
      <HeaderComponent />
      <MainConatianer>
        <Wrapper content>{children}</Wrapper>
      </MainConatianer>
      <FooterComponent />
    </MainWrapper>
  )
}

export default RootLayout

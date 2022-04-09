import styled from 'styled-components'
import { COLORS } from 'constants/colors'
import { ReactComponent as LogoImg } from 'assets/logo.svg'
import { BreakPoints } from 'constants/breakPoints'

export const HeaderContainer = styled.div`
  display: flex;
  height: 10vh;
  padding: 20px 80px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${BreakPoints.PHONE}) {
    padding: 20px 20px;
    height: 7vh;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Logo = styled(LogoImg)`
  width: 74px;
  height: 74px;
  margin-right: 20px;
  @media (max-width: ${BreakPoints.PHONE}) {
    margin-right: 10px;
    width: 45px;
    height: 45px;
  }
`

export const LogoText = styled.div`
  color: ${COLORS.blue};
  font-weight: 600;
  font-size: 24px;
  line-height: 37px;
  @media (max-width: ${BreakPoints.PHONE}) {
    font-size: 20px;
    line-height: 27px;
  }
`

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 8px 55px;
  background-color: ${COLORS.backgroundGrey};
  border-radius: 16px;
  @media (max-width: ${BreakPoints.PHONE}) {
    padding: 8px 25px;
  }
`

export const LoginText = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 37px;
  color: ${COLORS.lightGrey};
  cursor: pointer;
  @media (max-width: ${BreakPoints.PHONE}) {
    font-size: 20px;
    line-height: 27px;
  }
`

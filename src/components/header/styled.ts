import styled from 'styled-components'
import { COLORS } from '../../constants/colors'
import { ReactComponent as LogoImg } from 'assets/logo.svg'

export const HeaderContainer = styled.div`
  display: flex;
  height: 10vh;
  padding: 20px 80px;
  align-items: center;
  justify-content: space-between;
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
`

export const LogoText = styled.div`
  color: ${COLORS.blue};
  font-weight: 600;
  font-size: 24px;
  line-height: 37px;
`

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 8px 55px;
  background-color: ${COLORS.backgroundGrey};
  border-radius: 16px;
`

export const MenuItem = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: ${COLORS.darkBlue};
  margin-bottom: 10px;
`

export const LoginText = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 37px;
  color: ${COLORS.lightGrey};
  cursor: pointer;
`

import styled from 'styled-components'
import { COLORS } from 'constants/colors'
import { ReactComponent as LogoImg } from 'assets/logo.svg'

export const AuthBlock = styled.div`
  width: 414px;
  box-shadow: 0 8px 16px rgba(184, 203, 222, 0.6);
  border-radius: 8px;
  background: ${COLORS.white};
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled(LogoImg)`
  width: 65px;
  height: 65px;
  margin-right: 10px;
`

export const LogoText = styled.div`
  color: ${COLORS.blue};
  font-weight: 600;
  font-size: 22px;
  line-height: 35px;
`

export const DescrBlock = styled.div`
  margin-top: 20px;
  text-align: center;
  color: ${COLORS.lightGrey};
`

export const InputsContainer = styled.div`
  margin-top: 30px;
`

export const ErrorText = styled.div`
  font-size: 14px;
  line-height: 140%;
  color: ${COLORS.errorRed};
  margin-bottom: 15px;
`

export const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 40px;
  width: 280px;
  height: 48px;
  background: ${COLORS.blue};
  border-radius: 50px;
  user-select: none;
  color: ${COLORS.white};
  font-size: 16px;
  line-height: 140%;
  &:disabled {
    background: ${COLORS.lightGrey};
  }
`

export const LoginText = styled.div`
  color: ${COLORS.lightGrey};
  margin-top: 20px;
  font-weight: 500;
`

export const LoginSpan = styled.span`
  color: ${COLORS.blue};
  cursor: pointer;
`

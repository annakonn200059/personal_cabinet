import styled from 'styled-components'
import { COLORS } from 'constants/colors'

export const AuthWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.backgroundGrey};
`

export const Input = styled.input`
  padding: 0 0 3px 20px;
  width: calc(100% - 20px);
  max-width: 480px;
  min-width: 220px;
  height: 47px;
  border-radius: 16px;
  background: ${COLORS.white};
  font-size: 16px;
  line-height: 140%;
  border: 1px solid ${COLORS.blue};
  color: ${COLORS.black};
  margin-bottom: 30px;
  &:last-of-type {
    margin-bottom: 15px;
  }
`

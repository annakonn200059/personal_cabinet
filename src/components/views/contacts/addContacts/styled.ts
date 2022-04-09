import styled from 'styled-components'
import { COLORS } from 'constants/colors'

export const AddContactContainer = styled.div``

export const AddContactButton = styled.button`
  cursor: pointer;
  background-color: ${COLORS.blue};
  padding: 10px 20px;
  border-radius: 10px;
  color: ${COLORS.white};
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 16px;
`

export const InputsContainer = styled.div`
  margin-top: 30px;
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
  color: ${COLORS.lightGrey};
  margin-bottom: 30px;
  &:last-of-type {
    margin-bottom: 15px;
  }
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

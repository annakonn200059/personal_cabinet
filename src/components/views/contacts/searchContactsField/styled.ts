import styled from 'styled-components'
import { COLORS } from 'constants/colors'

export const InputBlock = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  border: 1px solid #eeeeee;
  background: ${COLORS.inputBG};
  border-radius: 10px;
  padding: 10px 20px;
  width: 228px;
  margin-bottom: 30px;
  @media (max-width: 400px) {
    max-width: 200px;
  }
`

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  font-size: 16px;
  line-height: 20px;
  &::placeholder {
    color: ${COLORS.lightGrey};
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`

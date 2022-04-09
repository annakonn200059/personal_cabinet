import styled from 'styled-components'
import { COLORS } from 'constants/colors'

export const Container = styled.div`
  height: 100vh;
  background-color: ${COLORS.backgroundGrey};
  padding: 0 80px;
  margin: 0 auto;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  row-gap: 40px;
  padding-top: 40px;
`

export const ContactTableWrapper = styled.div`
  width: 100%;
`

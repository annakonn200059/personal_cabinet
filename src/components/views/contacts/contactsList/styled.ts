import styled from 'styled-components'
import { COLORS } from 'constants/colors'
import { ReactComponent as EditButton } from 'assets/icons/subscriptions.svg'
import { ReactComponent as DeleteButton } from 'assets/icons/delete.svg'

export const ContactsSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const TableContainer = styled.div`
  width: 90%;
  padding: 20px;
  background-color: ${COLORS.white};
  border-radius: 20px;
`

export const ContactsTable = styled.div`
  background-color: ${COLORS.white};
  width: 100%;
`

export const TableHead = styled.div`
  border: 1px solid ${COLORS.lightGrey};
  letter-spacing: 2px;
  color: ${COLORS.lightGrey};
  font-weight: 600;
  padding: 15px 0;
  width: 100%;
`

export const TableHeadRow = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 20px;
`

export const TableColumnNames = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 25px 0 0 0;
  text-align: center;
`

export const TableRow = styled.div`
  text-align: center;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 15px 0;
`

export const TableBody = styled.div`
  border: 1px solid ${COLORS.lightGrey};
  width: 100%;
  display: flex;
  flex-direction: column;
  ${TableRow}:nth-child(odd) {
    background-color: ${COLORS.backgroundGrey};
  }

  ${TableRow}:nth-child(even) {
    background-color: ${COLORS.white};
  }
`

export const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const EditContact = styled(EditButton)`
  cursor: pointer;
`
export const DeleteContact = styled(DeleteButton)`
  cursor: pointer;
`

export const ModalText = styled.p``

export const ConfirmButton = styled.button`
  margin-top: 20px;
  background-color: ${COLORS.blue};
  padding: 4px 30px;
  border-radius: 10px;
  color: ${COLORS.white};
  font-weight: 600;
  font-size: 16px;
`

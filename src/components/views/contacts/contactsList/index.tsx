import React, { FC, useEffect, useState } from 'react'
import * as ST from './styled'
import { IContactList } from 'types/contacts'
import { deleteContact, patchContact } from 'api/contacts'
import DefaultPopup from '../../../ui/modals/defaultModal'

interface IConfirmDelete {
  onDelete: () => void
  closeModal: () => void
}

const ConfirmDelete = ({ onDelete, closeModal }: IConfirmDelete) => {
  return (
    <>
      <ST.ModalText>Do you really want to delete this contact?</ST.ModalText>
      <ST.ConfirmButton
        onClick={() => {
          onDelete()
          closeModal()
        }}
      >
        Yes
      </ST.ConfirmButton>
    </>
  )
}

export const ContactsList: FC<IContactList> = ({
  contacts,
  deleteContactListItem,
}: IContactList) => {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)
  const handleDeleteModal = (): void => {
    setShowDeleteModal(!showDeleteModal)
  }

  const deleteContactItem = (idContact: number): void => {
    deleteContact(idContact).then((resp) => deleteContactListItem(idContact))
  }

  return (
    <ST.ContactsSection>
      <ST.TableContainer>
        {contacts.length > 0 && (
          <ST.ContactsTable>
            <ST.TableHead>
              <ST.TableHeadRow>Your contacts</ST.TableHeadRow>
              <ST.TableColumnNames>
                <ST.Cell>Name</ST.Cell>
                <ST.Cell>Phone Number</ST.Cell>
                <ST.Cell>Edit contact</ST.Cell>
                <ST.Cell>Delete contact</ST.Cell>
              </ST.TableColumnNames>
            </ST.TableHead>
            <ST.TableBody>
              {contacts.map((contact) => (
                <ST.TableRow key={contact.id}>
                  <ST.Cell>{contact.args.name}</ST.Cell>
                  <ST.Cell>{contact.args.phoneNumber}</ST.Cell>
                  <ST.Cell>
                    <ST.EditContact />
                  </ST.Cell>
                  <ST.Cell>
                    <ST.DeleteContact onClick={() => handleDeleteModal()} />
                  </ST.Cell>
                  <DefaultPopup
                    children={
                      <ConfirmDelete
                        onDelete={() => deleteContactItem(contact.id)}
                        closeModal={() => handleDeleteModal()}
                      />
                    }
                    show={showDeleteModal}
                    onClose={handleDeleteModal}
                  />
                </ST.TableRow>
              ))}
            </ST.TableBody>
          </ST.ContactsTable>
        )}
        {contacts.length === 0 && (
          <ST.TableHeadRow>You haven't added any contacts yet</ST.TableHeadRow>
        )}
      </ST.TableContainer>
    </ST.ContactsSection>
  )
}

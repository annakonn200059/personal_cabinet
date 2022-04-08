import React, { FC, useEffect, useState } from 'react'
import * as ST from './styled'
import {
  IContact,
  IContactList,
  IPostContact,
  IPostContactResponse,
} from 'types/contacts'
import { deleteContact, getContactInfo, patchContact } from 'api/contacts'
import DefaultPopup from '../../../ui/modals/defaultModal'
import { useFormik } from 'formik'

interface IConfirmDelete {
  onDelete: () => void
  closeModal: () => void
}

interface IEditContact {
  idContact: number
  closeModal: () => void
  contactInfo: IPostContact
  updateContactListItem: (updatedContact: IPostContactResponse) => void
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

const ModalEditContact = ({
  idContact,
  closeModal,
  contactInfo,
  updateContactListItem,
}: IEditContact) => {
  const [errorText, setErrorText] = useState<string>('')

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: { ...contactInfo },
    onSubmit: async () => {
      const changedFields: IContact = {}
      Object.keys(contactInfo).forEach((contactField) => {
        if (values[contactField])
          changedFields[contactField] = values[contactField]
        else changedFields[contactField] = contactInfo[contactField]
      })
      patchContact({ idContact: idContact, args: changedFields })
        .then((resp) => {
          updateContactListItem(resp)
          closeModal()
        })
        .catch((e) => {
          setErrorText(e.response.data)
        })
    },
  })

  return (
    <>
      <ST.InputsContainer>
        <ST.Input
          placeholder={'Ivanov Ivan'}
          value={values.name}
          onChange={handleChange}
          id={'name'}
          name={'name'}
        />
        <ST.Input
          placeholder={'+7(927)-144-00-00'}
          value={values.phoneNumber}
          onChange={handleChange}
          id={'phoneNumber'}
          name={'phoneNumber'}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              e.stopPropagation()
              handleSubmit()
            }
          }}
        />
        <ST.ErrorText>{errorText ? errorText : ''}</ST.ErrorText>
      </ST.InputsContainer>
      <ST.SubmitButton
        type={'submit'}
        onClick={() => {
          handleSubmit()
        }}
      >
        Edit
      </ST.SubmitButton>
    </>
  )
}

export const ContactsList: FC<IContactList> = ({
  contacts,
  deleteContactListItem,
  updateContactListItem,
}: IContactList) => {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)
  const [showEditModal, setShowEditModal] = useState<boolean>(false)
  const handleDeleteModal = (): void => {
    setShowDeleteModal(!showDeleteModal)
  }
  const handleEditModal = (): void => {
    setShowEditModal(!showEditModal)
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
                    <ST.EditContact onClick={() => handleEditModal()} />
                  </ST.Cell>
                  <ST.Cell>
                    <ST.DeleteContact onClick={() => handleDeleteModal()} />
                  </ST.Cell>

                  <DefaultPopup
                    children={
                      <ModalEditContact
                        idContact={contact.id}
                        contactInfo={contact.args}
                        updateContactListItem={updateContactListItem}
                        closeModal={() => handleEditModal()}
                      />
                    }
                    show={showEditModal}
                    onClose={handleEditModal}
                  />

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

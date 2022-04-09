import React, { useEffect, useState, useCallback } from 'react'
import * as ST from './styled'
import { AddContact } from './addContacts'
import { ContactsList } from './contactsList'
import { IPostContactResponse } from 'types/contacts'
import { getAllPersonalContacts } from 'api/contacts'
import { useGetStateUser } from 'utils/getStateUser'

export const ContactsComponent = () => {
  const [contacts, setContacts] = useState<IPostContactResponse[]>([])
  const stateUser = useGetStateUser()

  const addContactToList = useCallback(
    (res: IPostContactResponse) => {
      setContacts((prevState) => [...prevState, res])
    },
    [contacts]
  )

  const deleteContactFromList = useCallback(
    (idContact: number) => {
      const newArrayContacts: IPostContactResponse[] = contacts.filter(
        (contact) => {
          return contact.id !== idContact
        }
      )
      setContacts(newArrayContacts)
    },
    [contacts]
  )

  const updateContactList = useCallback(
    (updatedContact: IPostContactResponse) => {
      setContacts(
        contacts.map((contact) =>
          contact.id === updatedContact.id
            ? {
                ...contact,
                args: {
                  ...updatedContact.args,
                },
              }
            : { ...contact }
        )
      )
    },
    [contacts]
  )

  useEffect(() => {
    getAllPersonalContacts(stateUser.user.id).then((resp) => setContacts(resp))
  }, [])

  return (
    <ST.Container>
      <ST.MainContainer>
        <AddContact setContactsList={addContactToList} stateUser={stateUser} />
        <ST.ContactTableWrapper>
          <ContactsList
            contacts={contacts}
            deleteContactListItem={deleteContactFromList}
            updateContactListItem={updateContactList}
          />
        </ST.ContactTableWrapper>
      </ST.MainContainer>
    </ST.Container>
  )
}

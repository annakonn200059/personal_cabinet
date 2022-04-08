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

  const setContactsList = useCallback(
    (res: IPostContactResponse) => {
      setContacts((prevState) => [...prevState, res])
    },
    [contacts]
  )

  const deleteContactItem = useCallback(
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

  const updateContacts = useCallback(
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
        <AddContact setContactsList={setContactsList} stateUser={stateUser} />
        <ContactsList
          contacts={contacts}
          deleteContactListItem={deleteContactItem}
          updateContactListItem={updateContacts}
        />
      </ST.MainContainer>
    </ST.Container>
  )
}

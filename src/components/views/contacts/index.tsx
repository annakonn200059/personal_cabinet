import React, { useEffect, useState, useCallback } from 'react'
import * as ST from './styled'
import { AddContact } from './addContacts'
import { ContactsList } from './contactsList'
import { IPostContactResponse } from 'types/contacts'
import { getAllPersonalContacts } from 'api/contacts'
import { useGetStateUser } from 'utils/getStateUser'
import { SearchContactsField } from './searchContactsField'
import { Loader } from '../../preloader/loaderComponent'

export const ContactsComponent = () => {
  const [contacts, setContacts] = useState<IPostContactResponse[]>([])
  const stateUser = useGetStateUser()
  const [isLoading, setIsLoading] = useState<boolean>(false)

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
    setIsLoading(true)
    getAllPersonalContacts(stateUser.user.id).then((resp) => setContacts(resp))
    setIsLoading(false)
  }, [])

  return (
    <ST.Container>
      <ST.MainContainer>
        <AddContact setContactsList={addContactToList} stateUser={stateUser} />
        <ST.ContactTableWrapper>
          <SearchContactsField
            setContactsList={setContacts}
            userId={stateUser.user.id}
            setIsLoading={setIsLoading}
          />
          {isLoading ? (
            <Loader />
          ) : (
            <ContactsList
              contacts={contacts}
              deleteContactListItem={deleteContactFromList}
              updateContactListItem={updateContactList}
              isLoading={isLoading}
            />
          )}
        </ST.ContactTableWrapper>
      </ST.MainContainer>
    </ST.Container>
  )
}

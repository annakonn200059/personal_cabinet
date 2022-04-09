import { AuthState } from './auth'

export interface IContact {
  [key: string]: string | number | undefined
  name?: string
  phoneNumber?: string
}

export interface IPostContact extends IContact {
  idUser: number
}

export interface IPostContactResponse {
  id: number
  args: IPostContact
}

export interface IDeleteContact {
  idContact: number
}
export interface IPutContact extends IDeleteContact {
  args: IContact
}

export interface IContactList {
  contacts: IPostContactResponse[]
  deleteContactListItem: (idContact: number) => void
  updateContactListItem: (updatedContact: IPostContactResponse) => void
}

export interface IAddContact {
  stateUser: AuthState
  setContactsList: (res: IPostContactResponse) => void
}

export interface IAddContactInputs extends IAddContact {
  closeModal: () => void
}

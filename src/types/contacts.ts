import React from 'react'
import { AuthState } from './auth'

export interface IContact {
  name?: string
  phoneNumber?: string
}

export interface IPostContact {
  name: string
  phoneNumber: string
  idUser: number
}

export interface IPostContactResponse {
  id: number
  args: IPostContact
}

export interface IDeleteContact {
  idContact: number
}
export interface IPatchContact extends IDeleteContact {
  args: IContact
}

export interface IContactList {
  contacts: IPostContactResponse[]
  deleteContactListItem: (idContact: number) => void
}

export interface IAddContact {
  stateUser: AuthState
  setContactsList: (res: IPostContactResponse) => void
}

export interface IAddContactInputs extends IAddContact {
  closeModal: () => void
}

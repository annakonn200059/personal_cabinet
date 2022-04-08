import { apiRequest } from '../request'
import {
  IPostContact,
  IPostContactResponse,
  IDeleteContact,
  IPatchContact,
} from 'types/contacts'

export const getAllContacts = async (
  idUser: number
): Promise<IPostContactResponse[]> => {
  const resp = await apiRequest().get(`/contacts?args.idUser=${idUser}`)
  return resp.data
}

export const postContact = async ({
  ...args
}: IPostContact): Promise<IPostContactResponse> => {
  const resp = await apiRequest().post('/contacts', { args })
  return resp.data
}

export const deleteContact = async (idContact: number): Promise<string> => {
  const resp = await apiRequest().delete(`/contacts/${idContact}`)
  return resp.data
}

export const patchContact = async ({
  idContact,
  args,
}: IPatchContact): Promise<string> => {
  const params = Object.keys(args)
  const values = Object.values(args)
  console.log(params)
  console.log(values)

  const resp = await apiRequest().patch(`/contacts/${idContact}`, {})
  return resp.data
}

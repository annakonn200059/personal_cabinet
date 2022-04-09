import { apiRequest } from '../request'
import { IPostContact, IPostContactResponse, IPutContact } from 'types/contacts'

export const getAllPersonalContacts = async (
  idUser: number
): Promise<IPostContactResponse[]> => {
  const resp = await apiRequest().get(`/contacts?args.idUser=${idUser}`)
  return resp.data
}

export const getSearchContacts = async (
  searchValue: string,
  userId: number
): Promise<IPostContactResponse[]> => {
  const resp = await apiRequest().get(
    `/contacts?args.idUser=${userId}&q=${searchValue}`
  )
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

export const patchContact = async (
  props: IPutContact
): Promise<IPostContactResponse> => {
  const resp = await apiRequest().patch(`/contacts/${props.idContact}`, {
    args: props.args,
  })
  return resp.data
}

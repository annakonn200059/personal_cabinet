import { apiRequest } from '../request'
import { IUserDataAuth, UserRegisterData, UserLoginData } from 'types/auth'

export const registerUser = async ({
  ...props
}: UserRegisterData): Promise<IUserDataAuth> => {
  const resp = await apiRequest().post('/register', { ...props })
  return resp.data
}

export const loginUser = async ({ ...props }: UserLoginData) => {
  const resp = await apiRequest().post('/login', { ...props })
  return resp.data
}

import { ReactNode } from 'react'

export interface User {
  id: number
  email: string
  username: string
}
export interface IUserDataAuth {
  accessToken: string
  user: User
}

export interface PropsRegisterStep {
  setStep: (stepId: number) => void
}

export interface UserLoginData {
  email: string
  password: string
}

export interface UserRegisterData extends UserLoginData {
  username: string
}

export interface PropsAuthForm extends PropsRegisterStep {
  children: ReactNode
  stepToSet: number
  formHeaderText: string
  formDescription: string
  errorText: string
  isDisabled: boolean
  handleSubmit: () => void
}

export enum AuthActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

interface Login {
  type: AuthActionTypes.LOGIN
  payload: {
    accessToken: string
    user: User
  }
}

interface Logout {
  type: AuthActionTypes.LOGOUT
}

export type AuthAction = Login | Logout

export type AuthState = {
  accessToken: string
  user: User
  isAuthorised: boolean
}

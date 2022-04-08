import { ReactNode } from 'react'

export interface IUserDataAuth {
  id: number
  token: string
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

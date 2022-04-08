import { Dispatch } from 'react'
import { AuthAction, AuthActionTypes } from 'types/auth'

export const login = (
  accessToken: string,
  user: { email: string; id: number; username: string }
): ((dispatch: Dispatch<AuthAction>) => void) => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: AuthActionTypes.LOGIN,
      payload: {
        accessToken: accessToken,
        user: user,
      },
    })
  }
}

export const logout = (): ((dispatch: Dispatch<AuthAction>) => void) => {
  localStorage.removeItem('auth')
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({ type: AuthActionTypes.LOGOUT })
  }
}

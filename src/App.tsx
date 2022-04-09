import React, { FC, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { Routing } from 'routing'
import { AuthState } from 'types/auth'
import { login, logout } from 'store/actions/auth'

const App: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const jsonUserData = localStorage.getItem('auth')
    if (jsonUserData) {
      const userData: AuthState = JSON.parse(jsonUserData)
      if (userData.accessToken) {
        dispatch(login(userData.accessToken, userData.user))
      }
    }
  }, [])
  return (
    <>
      <Routing />
    </>
  )
}

export default App

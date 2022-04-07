import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouterContent } from './PrivateRouter'

const Error = lazy(() =>
  import('pages/error').then((module) => ({ default: module.ErrorPage }))
)

const Contacts = lazy(() =>
  import('pages/contacts').then((module) => ({
    default: module.ContactsPage,
  }))
)

const Auth = lazy(() =>
  import('pages/auth').then((module) => ({ default: module.AuthPage }))
)

export const Routing = () => {
  return (
    <Routes>
      <Route
        path={'/'}
        element={<RouterContent isPrivate={false} children={<Auth />} />}
      />
      <Route
        path={'/contacts'}
        element={<RouterContent isPrivate={true} children={<Contacts />} />}
      />
      <Route
        path={'*'}
        element={<RouterContent isPrivate={false} children={<Error />} />}
      />
    </Routes>
  )
}

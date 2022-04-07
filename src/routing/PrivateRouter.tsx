import React, { FC, Suspense, ReactNode, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { Preloader } from 'components/preloader'
import { RouterContentProps } from 'types/privateRouter'
import getToken from '../utils/getToken'

export const RouterContent: FC<RouterContentProps> = ({
  children,
  isPrivate,
}: RouterContentProps) => {
  const isAuth = getToken()
  return !isAuth && isPrivate ? (
    <Navigate to={'/'} />
  ) : (
    <>
      <Suspense fallback={<Preloader />}>{children}</Suspense>
    </>
  )
}

import React, { ReactNode, Suspense, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Preloader } from 'components/preloader'

interface RouterContentProps {
  children: ReactNode
  isPrivate: boolean
  path?: string
}

export const RouterContent = ({
  children,
  isPrivate,
  path,
}: RouterContentProps) => {
  return (
    <>
      <Suspense fallback={<Preloader />}>{children}</Suspense>
    </>
  )
}

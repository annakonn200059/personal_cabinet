import React, { FC, ReactNode } from 'react'
import Header from '../header'
import * as ST from './styled'

interface ILayoutProps {
  children: ReactNode
  withHeader?: boolean
}

const Layout: FC<ILayoutProps> = ({ children, withHeader = true }) => {
  return (
    <ST.MainContainer>
      {withHeader && <Header />}
      {children}
    </ST.MainContainer>
  )
}

export default Layout

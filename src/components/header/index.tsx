import React from 'react'
import * as ST from './styled'
import getToken from 'utils/getToken'
import { NavLink } from 'react-router-dom'
import { logout } from 'store/actions/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = (): void => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <>
      <ST.HeaderContainer>
        <ST.LogoContainer>
          <ST.Logo />
          <ST.LogoText>Logo</ST.LogoText>
        </ST.LogoContainer>
        <ST.TabsContainer>
          {getToken() ? (
            <>
              <ST.LoginText onClick={handleLogout}>Logout</ST.LoginText>
            </>
          ) : (
            <NavLink to={'/'}>
              <ST.LoginText>Sign UP</ST.LoginText>
            </NavLink>
          )}
        </ST.TabsContainer>
      </ST.HeaderContainer>
    </>
  )
}

export default Header

import React, { useState, useEffect } from 'react'
import * as ST from './styled'
import { PropsRegisterStep } from 'types/auth'
import { AuthForm } from '../../authForm'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { registerUser } from 'api/auth'
import { useDispatch } from 'react-redux'
import { login } from 'store/actions/auth'
import { useGetStateUser } from 'utils/getStateUser'
import { onEnterSubmit } from 'utils/onEnterSubmit'

export const Register = ({ setStep }: PropsRegisterStep) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const stateUser = useGetStateUser()
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [errorText, setErrorText] = useState<string>('')

  const handleIsDisabled = (): void => {
    setIsDisabled((prevState) => !prevState)
  }

  useEffect(() => {
    if (stateUser.isAuthorised) {
      navigate('/contacts')
    }
  })

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(stateUser))
  }, [stateUser])

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: { email: '', username: '', password: '' },
    onSubmit: async () => {
      handleIsDisabled()
      registerUser({
        email: values.email,
        password: values.password,
        username: values.username,
      })
        .then((resp) => {
          dispatch(login(resp.accessToken, resp.user))
          handleIsDisabled()
          navigate('/contacts')
        })
        .catch((e) => {
          handleIsDisabled()
          setErrorText(e.response.data)
        })
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required('Required field missed')
        .email('Incorrect e-mail'),
      password: Yup.string().required('Required field missed'),
      username: Yup.string().required('Required field missed'),
    }),
  })
  return (
    <AuthForm
      children={
        <>
          <ST.Input
            placeholder={'example@gmail.com'}
            value={values.email}
            onChange={handleChange}
            disabled={isDisabled}
            id={'email'}
            name={'email'}
          />
          <ST.Input
            placeholder={'username'}
            value={values.username}
            onChange={handleChange}
            disabled={isDisabled}
            id={'username'}
            name={'username'}
          />
          <ST.Input
            placeholder={'password'}
            value={values.password}
            onChange={handleChange}
            disabled={isDisabled}
            id={'password'}
            name={'password'}
            onKeyDown={(e) => onEnterSubmit(e, handleSubmit)}
          />
        </>
      }
      setStep={setStep}
      stepToSet={2}
      formHeaderText={'SIGN UP'}
      formDescription={'Create an account to access your contacts!'}
      errorText={errorText ? errorText : errors.email ? errors.email : ''}
      isDisabled={isDisabled}
      handleSubmit={handleSubmit}
    />
  )
}

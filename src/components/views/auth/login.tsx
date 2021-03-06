import React, { useState, useEffect, FC } from 'react'
import * as ST from './styled'
import { PropsRegisterStep } from 'types/auth'
import { AuthForm } from '../../authForm'
import { useFormik } from 'formik'
import { login } from 'store/actions/auth'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from 'api/auth'
import { useGetStateUser } from 'utils/getStateUser'
import { onEnterSubmit } from 'utils/onEnterSubmit'

export const Login: FC<PropsRegisterStep> = ({
  setStep,
}: PropsRegisterStep) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const stateUser = useGetStateUser()
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [errorText, setErrorText] = useState<string>('')

  const handleIsDisabled = (): void => {
    setIsDisabled((prevState) => !prevState)
  }

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(stateUser))
  }, [stateUser])

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: async () => {
      handleIsDisabled()
      loginUser({ email: values.email, password: values.password })
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
      stepToSet={1}
      formHeaderText={'SIGN IN'}
      formDescription={'Login now!'}
      errorText={errorText ? errorText : errors.email ? errors.email : ''}
      isDisabled={isDisabled}
      handleSubmit={handleSubmit}
    />
  )
}

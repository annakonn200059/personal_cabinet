import React from 'react'
import * as ST from './styled'
import { PropsAuthForm } from '../../types/auth'

export const AuthForm = ({
  children,
  setStep,
  stepToSet,
  formHeaderText,
  formDescription,
  errorText,
  isDisabled,
  handleSubmit,
}: PropsAuthForm) => {
  return (
    <ST.AuthBlock>
      <ST.Header>
        <ST.LogoText>{formHeaderText}</ST.LogoText>
        <ST.LogoWrapper>
          <ST.Logo />
          <ST.LogoText>Logo</ST.LogoText>
        </ST.LogoWrapper>
      </ST.Header>
      <ST.DescrBlock>{formDescription}</ST.DescrBlock>
      <ST.InputsContainer>
        {children}
        <ST.ErrorText>{errorText}</ST.ErrorText>
      </ST.InputsContainer>
      <ST.SubmitButton
        type={'submit'}
        disabled={isDisabled}
        onClick={() => {
          handleSubmit()
        }}
      >
        {stepToSet === 1 ? 'Login' : 'Register'}
      </ST.SubmitButton>
      <ST.LoginText>
        {stepToSet === 1
          ? "Don't have an account? "
          : 'Already have an account? '}
        <ST.LoginSpan onClick={() => setStep(stepToSet)}>
          {stepToSet === 1 ? 'Register' : 'Login'}
        </ST.LoginSpan>
      </ST.LoginText>
    </ST.AuthBlock>
  )
}

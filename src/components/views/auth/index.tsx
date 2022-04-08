import React, { useState } from 'react'
import * as ST from './styled'
import { Register } from './register'
import { Login } from './login'

export const AuthComponent = () => {
  const [step, setStep] = useState<number>(1)
  const handleSwitchStep = (stepId: number): JSX.Element => {
    switch (stepId) {
      case 1:
        return <Register setStep={setStep} />
      case 2:
        return <Login setStep={setStep} />
      default:
        return <Register setStep={setStep} />
    }
  }
  return <ST.AuthWrapper>{handleSwitchStep(step)}</ST.AuthWrapper>
}

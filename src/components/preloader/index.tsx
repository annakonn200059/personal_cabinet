import React from 'react'
import * as ST from './styled'
import { Loader } from './loaderComponent'

export const Preloader = () => {
  return (
    <ST.StyledPreloaderWrapper>
      <Loader />
    </ST.StyledPreloaderWrapper>
  )
}

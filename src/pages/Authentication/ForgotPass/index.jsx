import React from 'react'
import { LayoutCommon } from '../../../layouts/styled'
import ForgotPassForm from './components/ForgotPassForm'
import { AuthenticationWrapper } from './styled'

const ForgotPass = () => {
  return (
    <LayoutCommon>
      <AuthenticationWrapper>
        <div className="flex w-3/5 max-w-[740px] items-center">
          <img src={'./image/boom_login.png'} alt="" />
        </div>
        <div className="flex w-2/5 items-center">
          <ForgotPassForm />
        </div>
      </AuthenticationWrapper>
    </LayoutCommon>
  )
}

export default ForgotPass

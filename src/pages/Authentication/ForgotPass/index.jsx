import React from 'react'
import { LayoutCommon } from '../../../layouts/styled'
import { AuthenticationWrapper } from './styled'
import ForgotPassForm from './ForgotPassForm'

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

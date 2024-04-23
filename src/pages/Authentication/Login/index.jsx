import React from 'react'
import LoginForm from './components/LoginForm'
import { AuthenticationWrapper } from './styled'
import { LayoutCommon } from '../../../layouts/styled'

const Login = () => {
  return (
    <LayoutCommon>
      <AuthenticationWrapper>
        <div className="flex w-3/5 max-w-[740px] items-center">
          <img src={'./image/boom_login.png'} alt="" />
        </div>
        <div className="flex w-2/5 items-center">
          <LoginForm />
        </div>
      </AuthenticationWrapper>
    </LayoutCommon>
  )
}

export default Login

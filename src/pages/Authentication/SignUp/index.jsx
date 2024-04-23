import React from 'react'
import { LayoutCommon } from '../../../layouts/styled'
import SignUpForm from './components/SignUpForm'
import { SignUpWrapper } from './styled'

const SignUp = () => {
  return (
    <LayoutCommon>
      <SignUpWrapper>
        <div className=" flex w-3/5 max-w-[740px] items-center">
          <img src={'./image/boom_login.png'} alt="" />
        </div>
        <div className="flex w-2/5 items-center">
          <SignUpForm />
        </div>
      </SignUpWrapper>
    </LayoutCommon>
  )
}

export default SignUp

import React from 'react'
import LoginForm from './LoginForm'
import { AuthenticationWrapper } from './styled'

const Authentication = () => {
  return (
    <AuthenticationWrapper
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-login.jpg`,
      }}
    >
      <div className="logo-app">
        <img
          src={process.env.PUBLIC_URL + '/images/logo-1bitlab-login.png'}
          width={330}
          alt=""
        />
      </div>

      <LoginForm />
    </AuthenticationWrapper>
  )
}

export default Authentication

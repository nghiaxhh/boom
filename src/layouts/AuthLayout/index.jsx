import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  )
}

export default AuthLayout

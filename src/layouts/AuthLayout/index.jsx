import React, { useEffect } from 'react'
import { Suspense } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { TOKEN_KEY } from '../../helper/constants'
import { ROUTE_PATH } from '../../routes/route.constant'

const AuthLayout = () => {
  const navigate = useNavigate()
  const isLogin = localStorage.getItem(TOKEN_KEY)

  useEffect(() => {
    if (isLogin) return navigate(ROUTE_PATH.HOME)
  })

  return (
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  )
}

export default AuthLayout

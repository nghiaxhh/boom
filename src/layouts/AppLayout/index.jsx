import React, { Suspense, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { getAccessToken } from '../../helper/utils'
import { ROUTE_PATH } from '../../routes/route.constant'

const AppLayout = () => {
  const navigate = useNavigate()
  const isLogin = getAccessToken()

  useEffect(() => {
    if (!isLogin) return navigate(ROUTE_PATH.LOGIN)
  }, [])

  return (
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  )
}

export default AppLayout

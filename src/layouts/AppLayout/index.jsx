import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  )
}

export default AppLayout

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Layout, Spin, theme } from 'antd'

import { useDispatch } from 'react-redux'
import { Outlet, useLocation } from 'react-router-dom'
import { ROUTE_PATH } from '../../routes/route.constant'

const { Content } = Layout

function MainLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const dispatch = useDispatch()
  const location = useLocation()

  const [loading, setLoading] = useState(false)

  useEffect(() => {}, [])

  return (
    <Layout>
      <Content style={{ padding: '20px' }}>
        <div
          className={`h-full rounded-xl p-5 ${
            location.pathname === ROUTE_PATH.EMPLOYEE_DETAIL ? '' : 'bg-white'
          }`}
        >
          <Spin spinning={loading}>
            <Outlet />
          </Spin>
        </div>
      </Content>
    </Layout>
  )
}

export default MainLayout

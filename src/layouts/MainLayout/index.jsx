import { Layout, Spin } from 'antd'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { TOKEN_KEY } from '../../helper/constants'
import { getRefreshToken, parseJwt } from '../../helper/utils'
import Navbar from './Navbar'
import { useQueryMe } from '../../hook/useQueryMe'

const { Content } = Layout

function MainLayout() {
  const navigate = useNavigate()
  const isLogin = localStorage.getItem(TOKEN_KEY)
  const refreshToken = getRefreshToken()
  const timeExpiredAccessToken = parseJwt(refreshToken)?.exp
  const { getInfo, loading: loadingQuery } = useQueryMe()

  useEffect(() => {
    if (!isLogin || timeExpiredAccessToken * 1000 < Date.now()) {
      localStorage.clear()
      return navigate('/')
    }
    getInfo()
  }, [])

  return (
    <Layout>
      <Spin spinning={loadingQuery}>
        <Navbar />
        <Content>
          <div className="bg-white">
            <Outlet />
          </div>
        </Content>
      </Spin>
    </Layout>
  )
}

export default MainLayout

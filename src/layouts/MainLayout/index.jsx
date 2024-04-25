import { Layout } from 'antd'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { TOKEN_KEY } from '../../helper/constants'
import Navbar from './Navbar'

const { Content } = Layout

function MainLayout() {
  const navigate = useNavigate()
  const isLogin = localStorage.getItem(TOKEN_KEY)

  useEffect(() => {
    if (!isLogin) return navigate('/')
  }, [])

  return (
    <Layout>
      <Navbar />
      <Content>
        <div className="bg-white">
          <Outlet />
        </div>
      </Content>
    </Layout>
  )
}

export default MainLayout

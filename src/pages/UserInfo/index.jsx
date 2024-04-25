import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Col, Divider, Row, Spin } from 'antd'
import React, { useState } from 'react'
import { LayoutCommon } from '../../layouts/styled'
import { UserInfoWrapper } from './styled'
import Profile from './components/Profile'
import ChangePassword from './components/ChangePassword'
import AuthServices from '../../services/AuthServices'
import { useNavigate } from 'react-router-dom'

function UserInfo() {
  const navigate = useNavigate()
  const [tabActive, setTabActive] = useState(1)
  const [loading, setLoading] = useState(false)

  const handleLogout = () => {
    setLoading(true)
    AuthServices.logOut()
      .then((res) => {
        if (res.isOk) {
          localStorage.clear()
          navigate('/')
        }
      })
      .catch(() => {})
      .then(() => setLoading(false))
  }

  return (
    <UserInfoWrapper>
      <Spin spinning={loading}>
        <LayoutCommon>
          <div className="mb-6 flex h-[100px] justify-between bg-[#FFF7E6] px-6">
            <div className=" text-xl font-semibold">Profile</div>
            <img src={'./image/play_earn.png'} alt="" height={90} />
          </div>
          <Row gutter={32}>
            <Col span={5}>
              <div className="rounded-lg bg-[#F8F8F8] px-4">
                <div className="flex h-12 gap-2">
                  <UserOutlined />
                  My Account
                </div>
                <Divider />

                <div
                  className={`flex h-12 cursor-pointer pl-5 ${tabActive === 1 && 'text-[#FF9C09]'}`}
                  onClick={() => setTabActive(1)}
                >
                  Profile
                </div>
                <Divider />
                <div
                  className={`flex h-12 cursor-pointer pl-5 ${tabActive === 2 && 'text-[#FF9C09]'}`}
                  onClick={() => setTabActive(2)}
                >
                  Change Password
                </div>

                <Divider />
                <div
                  className="flex h-12 cursor-pointer gap-2 "
                  onClick={handleLogout}
                >
                  <LogoutOutlined />
                  Log out
                </div>
              </div>
            </Col>
            <Col span={19}>
              {tabActive === 1 ? <Profile /> : <ChangePassword />}
            </Col>
          </Row>
        </LayoutCommon>
      </Spin>
    </UserInfoWrapper>
  )
}

export default UserInfo

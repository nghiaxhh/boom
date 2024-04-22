import { Form, Input } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { TOKEN_KEY } from '../../helper/constants'
import { ROUTE_PATH } from '../../routes/route.constant'
import { LoginFormWrapper } from './styled'
import AuthServices from '../../services/AuthServices'

const LoginForm = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    form
      .validateFields()
      .then((val) => {
        setLoading(true)
        const body = {
          username: val.email,
          password: val.password,
        }
        AuthServices.login(body)
          .then((respon) => {
            if (respon.status) {
              localStorage.setItem(TOKEN_KEY, JSON.stringify(respon))
              navigate(ROUTE_PATH.DASHBOARD)
            }
          })

          .finally(() => setLoading(false))
      })
      .catch(() => {})
  }

  return (
    <LoginFormWrapper>
      <div className="text-welcome">
        Please fill in your unique admin login details below
      </div>
      <div>
        <Form form={form} layout="vertical">
          <Form.Item
            name={'email'}
            label="Email address"
            style={{ marginBottom: '45px' }}
            rules={[
              {
                required: true,
                message: 'Thông tin không được để trống',
              },
            ]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>
          <Form.Item
            name={'password'}
            label="Password"
            style={{ marginBottom: '96px' }}
            rules={[
              {
                required: true,
                message: 'Thông tin không được để trống',
              },
            ]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>
        </Form>
        <Button loading={loading} className="btn-login" onClick={handleSubmit}>
          Sign In
        </Button>
      </div>
    </LoginFormWrapper>
  )
}

export default LoginForm

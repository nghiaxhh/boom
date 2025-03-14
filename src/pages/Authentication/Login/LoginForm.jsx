import React from 'react'
import { Checkbox, Col, Form, Input, Row, Spin } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Button'
import { isValidEmail } from '../../../helper/utils'
import { ROUTE_PATH } from '../../../routes/route.constant'
import { LoginFormWrapper } from './styled'
import { TOKEN_KEY } from 'helper/constants'

const LoginForm = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    form
      .validateFields()
      .then((val) => {
        setLoading(true)
        const changeLoading = setTimeout(() => {
          setLoading(false)
          navigate(ROUTE_PATH.HOME)
          localStorage.setItem(TOKEN_KEY, 'JSON.stringify(respon)')
          console.log(val)
        }, 3000)

        // const body = {
        //   username: val.email,
        //   password: val.password,
        // }
        // AuthServices.logIn(body)
        //   .then((respon) => {
        //     if (respon.isOk) {
        //       localStorage.setItem(TOKEN_KEY, JSON.stringify(respon))
        //       navigate(ROUTE_PATH.HOME)
        //     }
        //   })
        //   .finally(() => setLoading(false))
      })
      .catch(() => {})
  }

  return (
    <LoginFormWrapper>
      <img
        src={process.env.PUBLIC_URL + '/image/boom_arena.png'}
        alt=""
        className="w-[141px]"
      />
      <div className="mb-8 mt-6 text-[32px] font-bold">Welcome</div>

      <Spin spinning={loading}>
        <Form form={form} layout="vertical" requiredMark={false}>
          <Row>
            <Col span={24}>
              <Form.Item
                name={'email'}
                label="Email address"
                rules={[
                  {
                    required: true,
                    message: 'This field is required!',
                  },
                  {
                    pattern: isValidEmail(),
                    message: 'Email is not a valid email!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name={'password'}
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'This field is required!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
            <Col span={24}>
              <div className="mb-6 flex items-center justify-between">
                <Form.Item name={'remember'} valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <div
                  className="cursor-pointer font-bold text-[#FF9C09]"
                  onClick={() => navigate(ROUTE_PATH.CONFIRM_EMAIL)}
                >
                  Forgot password
                </div>
              </div>
            </Col>
          </Row>
        </Form>
        <Button className="mb-6 w-full" onClick={handleSubmit}>
          Log in
        </Button>
        <div className="flex justify-center">
          <div>Don't have account?&nbsp;</div>
          <div
            className="cursor-pointer font-bold text-[#FF9C09]"
            onClick={() => navigate(ROUTE_PATH.SIGN_UP)}
          >
            Sign up here
          </div>
        </div>
      </Spin>
    </LoginFormWrapper>
  )
}

export default LoginForm

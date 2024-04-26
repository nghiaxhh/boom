import { Col, Form, Input, Row, Spin } from 'antd'
import queryString from 'query-string'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import Button from '../../../components/Button'
import { parseJwt } from '../../../helper/utils'
import { LayoutCommon } from '../../../layouts/styled'
import { ROUTE_PATH } from '../../../routes/route.constant'
import AuthServices from '../../../services/AuthServices'
import { AuthenticationWrapper, ForgotPassWrapper } from './styled'

export default function ResetPassword() {
  const [form] = Form.useForm()
  const location = useLocation()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const token = queryString.parseUrl(location.search)?.query?.token

  useEffect(() => {
    console.log(!token?.exp)
    console.log(token?.exp * 1000 < Date.now())
    if (!parseJwt(token)?.exp || parseJwt(token)?.exp * 1000 < Date.now())
      return navigate(ROUTE_PATH.HOME)
  }, [])

  const handleSubmit = () => {
    form
      .validateFields()
      .then((val) => {
        setLoading(true)
        const body = {
          token,
          new_password: val.password,
        }
        AuthServices.resetPassword(body)
          .then((res) => {
            if (res.isOk) {
              toast.success('Success')
              navigate(ROUTE_PATH.LOGIN)
            }
          })
          .catch(() => {})
          .finally(() => setLoading(false))
      })
      .catch(() => {})
  }

  return (
    <LayoutCommon>
      <AuthenticationWrapper>
        <div className="flex w-3/5 max-w-[740px] items-center">
          <img src={'./image/boom_login.png'} alt="" width={600} />
        </div>
        <div className="flex w-2/5 items-center">
          <ForgotPassWrapper>
            <img
              src={process.env.PUBLIC_URL + '/image/boom_arena.png'}
              alt=""
              className="w-[141px]"
            />

            <Spin spinning={loading}>
              <div className="mb-8 mt-6 text-[32px] font-bold">
                Set new password
              </div>
            </Spin>

            <Form
              form={form}
              layout="vertical"
              requiredMark={false}
              className="w-full"
            >
              <Row>
                <Col span={24}>
                  <Form.Item
                    label="Password"
                    name={'password'}
                    rules={[
                      {
                        required: true,
                        message: 'Thông tin không được để trống',
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    name={'confirmPass'}
                    label="Confirm Password"
                    rules={[
                      {
                        required: true,
                        message: 'Thông tin không được để trống',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve()
                          }
                          return Promise.reject(new Error('Password invalid'))
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                </Col>
              </Row>
            </Form>

            <Button className="my-6 w-full" onClick={handleSubmit}>
              Set Password
            </Button>
            <Button
              className="mb-6 w-full"
              onClick={() => navigate(ROUTE_PATH.LOGIN)}
            >
              Back to login
            </Button>
          </ForgotPassWrapper>
        </div>
      </AuthenticationWrapper>
    </LayoutCommon>
  )
}

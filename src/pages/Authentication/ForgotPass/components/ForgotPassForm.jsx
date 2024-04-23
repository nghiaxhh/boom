import { Col, Form, Input, Row, Spin } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../components/Button'
import { ROUTE_PATH } from '../../../../routes/route.constant'
import { ForgotPassWrapper } from '../styled'
import AuthServices from '../../../../services/AuthServices'

const ForgotPassForm = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [newPassword, setNewPassword] = useState(false)

  const handleSubmit = () => {
    form
      .validateFields()
      .then((val) => {
        setLoading(true)
        const body = {
          username: 'admin@1bitlab.io',
          password: 'oneb!tlab@MmXx4',
        }
        AuthServices.login(body)
          .then((respon) => {
            console.log(respon)
            if (respon.isOk) {
              setNewPassword(true)
            }
          })

          .finally(() => setLoading(false))
      })
      .catch(() => {})
  }

  return (
    <ForgotPassWrapper>
      <img
        src={process.env.PUBLIC_URL + '/image/boom_arena.png'}
        alt=""
        className="w-[141px]"
      />

      <Spin spinning={loading}>
        <div className="mb-8 mt-6 text-[32px] font-bold">
          {!newPassword ? 'Forgot your password?' : 'Set new password?'}
        </div>
      </Spin>
      {!newPassword ? (
        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          className="w-full"
        >
          <Form.Item
            name={'email'}
            label="Email address"
            rules={[
              {
                required: true,
                message: 'Thông tin không được để trống',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      ) : (
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
      )}

      <Button className="my-6 w-full" onClick={handleSubmit}>
        Submit
      </Button>
      <Button
        className="mb-6 w-full"
        onClick={() => navigate(ROUTE_PATH.LOGIN)}
      >
        Back to login
      </Button>
    </ForgotPassWrapper>
  )
}

export default ForgotPassForm

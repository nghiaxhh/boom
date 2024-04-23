import { Checkbox, Col, Form, Input, Row } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../components/Button'
import { SignUpFormWrapper } from '../styled'
import { ROUTE_PATH } from '../../../../routes/route.constant'

const SignUpForm = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  return (
    <SignUpFormWrapper>
      <img
        src={process.env.PUBLIC_URL + '/image/boom_arena.png'}
        alt=""
        className="w-[141px]"
      />
      <div className="mb-8 mt-6 text-[32px] font-bold">Create New Account</div>

      <div>
        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          autoComplete={false}
        >
          <Row>
            <Col span={24}>
              <Form.Item
                name={'fullName'}
                label="Full Name"
                rules={[
                  {
                    required: true,
                    message: 'Thông tin không được để trống',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
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
            </Col>
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
            <Col span={24} className="mb-6 flex items-center gap-1">
              <Form.Item name={'remember'} noStyle>
                <Checkbox />
              </Form.Item>
              <div className="flex">
                I agree with the&nbsp;
                <div className="cursor-pointer font-bold text-[#FF9C09]">
                  Terms of services&nbsp;
                </div>
                and&nbsp;
                <div className="cursor-pointer font-bold text-[#FF9C09]">
                  Privacy Policy
                </div>
              </div>
            </Col>
          </Row>
        </Form>
        <Button loading={loading} className="mb-6 w-full">
          Sign Up
        </Button>
        <div className="flex justify-center">
          <div>Already have an account?&nbsp;</div>
          <div
            className="cursor-pointer font-bold text-[#FF9C09]"
            onClick={() => navigate(ROUTE_PATH.LOGIN)}
          >
            Login here
          </div>
        </div>
      </div>
    </SignUpFormWrapper>
  )
}

export default SignUpForm

/* eslint-disable no-unused-vars */
import { Checkbox, Col, Form, Input, Row, Spin } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Button'
import { SignUpFormWrapper } from './styled'
import { ROUTE_PATH } from '../../../routes/route.constant'
import AuthServices from './../../../services/AuthServices'
import { toast } from 'sonner'
import { isValidEmail } from '../../../helper/utils'
import { useSDK } from '@metamask/sdk-react'

const SignUpForm = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const isDisableButton = !Form.useWatch('termsServices', form)
  const [loading, setLoading] = useState(false)
  const { sdk } = useSDK()
  const message = 'Login with Boom'

  const handleConnectMetamask = async () => {
    sdk?.disconnect()
    sdk?.terminate()
    const userInfo = await sdk
      ?.connect()
      .then(async (accounts) => {
        let signature = await sdk.getProvider().request({
          method: 'personal_sign',
          params: [accounts[0], message],
        })

        let dataUser = {
          address_wallet: accounts[0],
          signature: signature,
          message: message,
        }

        return dataUser
      })
      .catch(() => {})
    return userInfo
  }

  const handleSubmitForm = () => {
    form
      .validateFields()
      .then(async (values) => {
        const userInfo = await handleConnectMetamask()

        const body = {
          web3_wallet_address: userInfo.address_wallet,
          message: userInfo.message,
          signature: userInfo.signature,
          username: values.email,
          password: values.password,
          fullname: values.fullName,
          referred_code: values.referalID,
        }
        setLoading(true)
        const res = await AuthServices.signUp(body)

        if (res.isOk) {
          toast.success('Success')
          navigate(ROUTE_PATH.LOGIN)
        }

        setLoading(false)
      })
      .catch(() => {})
  }

  return (
    <SignUpFormWrapper>
      <img
        src={process.env.PUBLIC_URL + '/image/boom_arena.png'}
        alt=""
        className="w-[141px]"
      />
      <div className="mb-8 mt-6 text-[32px] font-bold">Create New Account</div>

      <Spin spinning={loading}>
        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          autoComplete="off"
          // onValuesChange={(changeValue) => console.log(changeValue)}
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
                  {
                    pattern: isValidEmail(),
                    message: 'Email không đúng định dạng',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name={'referalID'}
                label="Referral ID"
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
              <Form.Item name={'termsServices'} valuePropName="checked" noStyle>
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
        <Button
          disabled={!!isDisableButton}
          className="mb-6 w-full"
          onClick={handleSubmitForm}
        >
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
      </Spin>
    </SignUpFormWrapper>
  )
}

export default SignUpForm

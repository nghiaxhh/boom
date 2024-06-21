import { Form, Input, Modal, Spin } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Button'
import { ROUTE_PATH } from '../../../routes/route.constant'
import AuthServices from '../../../services/AuthServices'
import { AuthenticationWrapper, ForgotPassWrapper } from './styled'
import { LayoutCommon } from '../../../layouts/styled'
import { isValidEmail } from '../../../helper/utils'

const ConfirmEmail = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [modal, contextHolder] = Modal.useModal()
  const [loading, setLoading] = useState(false)

  const countDown = () => {
    let secondsToGo = 3
    const instance = modal.success({
      title: <div>Yêu cầu thành công!</div>,
      content: (
        <div className="flex flex-col">
          <div>Kiểm tra email để đặt lại mật khẩu</div>
          <div>{secondsToGo}</div>
        </div>
      ),
    })
    const timer = setInterval(() => {
      secondsToGo -= 1
      instance.update({
        content: (
          <div className="flex flex-col">
            <div>Kiểm tra email để đặt lại mật khẩu</div>
            <div>{secondsToGo}</div>
          </div>
        ),
      })
    }, 1000)
    setTimeout(() => {
      clearInterval(timer)
      instance.destroy()
      navigate(ROUTE_PATH.HOME)
    }, secondsToGo * 1000)
  }

  const handleSubmit = () => {
    form
      .validateFields()
      .then((value) => {
        setLoading(true)

        AuthServices.confirmEmail({ email: value.email })
          .then((respon) => {
            if (respon.isOk) {
              countDown()
            }
          })

          .finally(() => setLoading(false))
      })
      .catch(() => {})
  }

  return (
    <LayoutCommon>
      {contextHolder}
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
                Forgot your password
              </div>
            </Spin>
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
            </Form>

            <Button className="my-6 w-full" onClick={handleSubmit}>
              Submit
            </Button>
            <Button
              bgColor="white"
              color="#FF9C09"
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

export default ConfirmEmail

import { Col, Divider, Form, Input, Row, Spin } from 'antd'
import React, { useState } from 'react'
import Button from '../../../components/Button'
import UserServices from '../../../services/UserServices'
import { toast } from 'sonner'

const ChangePassword = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        setLoading(true)
        const body = {
          curr_password: values.password,
          new_password: values.newPassword,
        }

        UserServices.changePassword(body)
          .then((res) => {
            if (res.isOk) {
              form.resetFields()
              toast.success('Success')
            }
          })
          .catch(() => {})
          .finally(() => setLoading(false))
      })
      .catch(() => {})
  }

  return (
    <div className="border-[1px] border-solid border-[#d9d9d9]">
      <div className="flex justify-between px-[26px] py-7">
        <div className="font-semibold">Change Password</div>
      </div>
      <Divider />
      <Spin spinning={loading}>
        <div className="px-[26px] pt-6">
          <Form
            form={form}
            colon={false}
            labelCol={{ span: 6 }}
            labelAlign="left"
            requiredMark={false}
          >
            <Row>
              <Col span={20}>
                <Form.Item
                  label="Recent Password"
                  name={'password'}
                  rules={[
                    {
                      required: true,
                      message: 'required',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  label="New Password"
                  name={'newPassword'}
                  rules={[
                    {
                      required: true,
                      message: 'required',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  label="Confirm New Password"
                  name={'confirmPass'}
                  rules={[
                    {
                      required: true,
                      message: 'required',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('newPassword') === value) {
                          return Promise.resolve()
                        }
                        return Promise.reject(new Error('Mật khẩu không khớp'))
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item label=" ">
                  <Button onClick={handleSubmit}>Save</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </Spin>
    </div>
  )
}

export default ChangePassword

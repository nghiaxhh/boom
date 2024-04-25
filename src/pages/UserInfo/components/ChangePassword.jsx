import { Col, Divider, Form, Input, Row } from 'antd'
import React from 'react'
import Button from '../../../components/Button'

const ChangePassword = () => {
  const [form] = Form.useForm()

  return (
    <div className="border-[1px] border-solid border-[#d9d9d9]">
      <div className="flex justify-between px-[26px] py-7">
        <div className="font-semibold">Change Password</div>
      </div>
      <Divider />

      <div className="px-[26px] pt-6">
        <Form
          form={form}
          colon={false}
          labelCol={{ span: 6 }}
          labelAlign="left"
        >
          <Row>
            <Col span={20}>
              <Form.Item name="referalID" label="Recent Password">
                <Input />
              </Form.Item>
              <Form.Item name="gameName" label="New Password">
                <Input />
              </Form.Item>
              <Form.Item name="email" label="Confirm New Password">
                <Input />
              </Form.Item>

              <Form.Item label=" ">
                <Button>Save</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  )
}

export default ChangePassword

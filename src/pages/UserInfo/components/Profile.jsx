import { Col, Divider, Form, Image, Input, Row, Upload } from 'antd'
import React, { useState } from 'react'
import IconSvg from '../../../components/SvgIcon'
import { getBase64 } from '../../../helper/utils'
import Button from '../../../components/Button'

function Profile() {
  const [form] = Form.useForm()
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [fileList, setFileList] = useState([])
  const [fileAvatar, setFileAvatar] = useState([])

  const uploadProps = {
    accept: 'image/png, image/jpeg',
    maxCount: 1,
    multiple: false,
  }

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
    setPreviewImage(file.url || file.preview)
    setPreviewOpen(true)
  }

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList)
  const onChangeFileAvatar = ({ fileList: newFileList }) =>
    setFileAvatar(newFileList)

  return (
    <div className="border-[1px] border-solid border-[#d9d9d9]">
      <div className="flex justify-between px-[26px] py-7">
        <div className="font-semibold">My Profile</div>
        <div className="flex">
          <IconSvg name="icon-pencil" />
          Edit Profile
        </div>
      </div>
      <Divider />

      <div className="px-[26px] pt-6">
        <Upload
          {...uploadProps}
          listType="picture"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          beforeUpload={(file) => {
            setFileList([...fileList, file])
            return false
          }}
        >
          {fileList.length >= 1 ? null : (
            <div className="abc flex">
              <IconSvg name="icon-image" />
              Upload
            </div>
          )}
          {/* <Button icon={<UploadOutlined />}>Click to Upload</Button> */}
        </Upload>
        <Form
          form={form}
          colon={false}
          labelCol={{ span: 6 }}
          labelAlign="left"
        >
          <Row>
            <Col span={16}>
              <Form.Item name="referalID" label="Referal ID">
                <Input />
              </Form.Item>
              <Form.Item name="gameName" label="Game name">
                <Input />
              </Form.Item>
              <Form.Item name="email" label="Email">
                <Input />
              </Form.Item>
              <Form.Item name="description" label="Description">
                <Input.TextArea />
              </Form.Item>
              <Form.Item label=" ">
                <Button>Save</Button>
              </Form.Item>
            </Col>
            <Col span={8} className="flex flex-col justify-center">
              <Upload
                {...uploadProps}
                listType="picture-circle"
                fileList={fileAvatar}
                onChange={onChangeFileAvatar}
                onPreview={handlePreview}
                beforeUpload={(file) => {
                  setFileAvatar([...fileAvatar, file])
                  return false
                }}
              >
                {fileAvatar.length < 1 && 'Avatar'}
              </Upload>
              <div>Maximum capacity 5 MB</div>
              <div>Format: .JPEG, .PNG</div>
            </Col>
          </Row>
        </Form>
      </div>
      {previewImage && (
        <Image
          wrapperStyle={{
            display: 'none',
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
    </div>
  )
}

export default Profile

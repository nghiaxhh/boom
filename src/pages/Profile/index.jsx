import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Col, Divider, Form, Image, Row, Upload } from 'antd'
import React, { useState } from 'react'
import { getBase64 } from '../../helper/utils'
import { LayoutCommon } from '../../layouts/styled'
import { ProfileWrapper } from './styled'

function Profile() {
  const [form] = Form.useForm()
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [fileList, setFileList] = useState([])

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
    setPreviewImage(file.url || file.preview)
    setPreviewOpen(true)
  }

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList)

  return (
    <ProfileWrapper>
      <LayoutCommon>
        <div className="mb-6 h-[100px] bg-[#FFF7E6]">Profile</div>
        <Row gutter={32}>
          <Col span={5}>
            <div className="rounded-lg bg-[#F8F8F8] px-4">
              <div className="flex h-12 gap-2">
                <UserOutlined />
                My Account
              </div>
              <Divider />

              <div className="flex h-12 pl-5">Profile</div>
              <Divider />
              <div className="flex h-12 pl-5">Change Password</div>

              <Divider />
              <div className="flex h-12 gap-2">
                <LogoutOutlined />
                Log out
              </div>
            </div>
          </Col>
          <Col span={19}>
            <div className="border-[1px] border-solid border-[#d9d9d9]">
              <div className="flex justify-between  px-[26px]">
                <div>My Profile</div>
                <div>Edit Profile</div>
              </div>
              <Divider />
              <div className=" px-[26px]">
                <Upload
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                >
                  {fileList.length >= 1 ? null : <div className="abc" />}
                  {/* <Button icon={<UploadOutlined />}>Click to Upload</Button> */}
                </Upload>
              </div>
            </div>
          </Col>
        </Row>
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
      </LayoutCommon>
    </ProfileWrapper>
  )
}

export default Profile

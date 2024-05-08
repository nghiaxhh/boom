import { Col, Divider, Form, Image, Input, Row, Spin, Upload } from 'antd'
import React, { useEffect, useState } from 'react'
import IconSvg from '../../../components/SvgIcon'
import { getBase64 } from '../../../helper/utils'
import Button from '../../../components/Button'
import UserServices from '../../../services/UserServices'
import FileServices from '../../../services/FileServices'
import { toast } from 'sonner'

function Profile() {
  const [form] = Form.useForm()
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')

  const [fileCover, setFileCover] = useState([])
  const [fileAvatar, setFileAvatar] = useState([])
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)

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

  const handleChange = ({ fileList: newFileList }) => setFileCover(newFileList)
  const onChangeFileAvatar = ({ fileList: newFileList }) =>
    setFileAvatar(newFileList)

  const getInfo = () => {
    setLoading(true)
    UserServices.getMe()
      .then((res) => {
        if (res.isOk) {
          const userInfo = res.data
          form.setFieldsValue({
            referalID: userInfo.referral_code,
            fullname: userInfo.fullname,
            email: userInfo.username,
            description: userInfo.description,
          })
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getInfo()
  }, [])

  const handleSubmit = async () => {
    const values = form.getFieldsValue()
    let responAvatar = null
    let responCover = null
    setLoading(true)
    if (!fileAvatar.length) {
      responAvatar = await FileServices.uploadFile({
        file: fileAvatar[0]?.originFileObj,
      })
    }
    if (!fileCover.length) {
      responCover = await FileServices.uploadFile({
        file: fileAvatar[0]?.originFileObj,
      })
    }
    console.log(responAvatar, responCover)

    const body = {
      description: values.description,
      fullname: values.fullname,
      ...(responAvatar?.isOk && {
        profile_img: responAvatar.data.file_name,
      }),
      ...(responCover?.isOk && {
        cover_img: responCover.data.file_name,
      }),
    }

    const res = await UserServices.updateUser(body)
    if (res?.isOk) {
      toast.success('Success')
      getInfo()
    }
    setLoading(false)
  }

  return (
    <Spin spinning={loading}>
      <div className="border-[1px] border-solid border-[#d9d9d9]">
        <div className="flex justify-between px-[26px] py-7">
          <div className="font-semibold">My Profile</div>
          <div
            className="flex cursor-pointer"
            onClick={() => setDisabled(false)}
          >
            <IconSvg name="icon-pencil" />
            Edit Profile
          </div>
        </div>
        <Divider />

        <div className="px-[26px] pt-6">
          <Upload
            {...uploadProps}
            listType="picture"
            fileList={fileCover}
            onPreview={handlePreview}
            onChange={handleChange}
            beforeUpload={(file) => {
              setFileCover([...fileCover, file])
              return false
            }}
          >
            {fileCover.length >= 1 ? null : (
              <div className="abc flex">
                <IconSvg name="icon-image" />
                Upload
              </div>
            )}
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
                  <Input disabled={disabled} />
                </Form.Item>
                <Form.Item name="fullname" label="Game name">
                  <Input disabled={disabled} />
                </Form.Item>
                <Form.Item name="email" label="Email">
                  <Input disabled={disabled} />
                </Form.Item>
                <Form.Item name="description" label="Description">
                  <Input.TextArea disabled={disabled} />
                </Form.Item>
                <Form.Item label=" ">
                  <Button disabled={disabled} onClick={handleSubmit}>
                    Save
                  </Button>
                </Form.Item>
              </Col>
              <Col span={8} className="flex flex-col justify-center">
                <Upload
                  {...uploadProps}
                  disabled={disabled}
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

                {fileAvatar.length < 1 && <div>Maximum capacity 5 MB</div>}
                {fileAvatar.length < 1 && <div>Format: .JPEG, .PNG</div>}
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
    </Spin>
  )
}

export default Profile

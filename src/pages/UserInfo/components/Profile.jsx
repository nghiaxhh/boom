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
  const [changeAvatar, setChangeAvatar] = useState(false)
  const [changeCoverImg, setChangeCoverImg] = useState(false)
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

  const onChangeFileAvatar = ({ fileList: newFileList }) => {
    setChangeAvatar(true)
    setFileAvatar(newFileList)
  }

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
          !!userInfo?.profile_img &&
            setFileAvatar([
              {
                url:
                  process.env.REACT_APP_API +
                  '/api/v1/files/download?fileName=' +
                  userInfo?.profile_img,
              },
            ])
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
    console.log(values)
    let responAvatar = null
    let responCover = null
    setLoading(true)
    if (fileAvatar.length && changeAvatar) {
      responAvatar = await FileServices.uploadFile({
        file: fileAvatar[0]?.originFileObj,
      })
    }
    if (fileCover.length && changeCoverImg) {
      responCover = await FileServices.uploadFile({
        file: fileCover[0]?.originFileObj,
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

  const handleCropImage = (fileList) => {
    console.log(fileList[0])
    if (fileList[0]?.size > 1024 * 10 * 1024)
      return toast.error('Kích thước ảnh quá lớn')
    setChangeCoverImg(true)
    return setFileCover(fileList[0])
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
          <div className="mb-6">
            <label>
              <div className="cover-image flex">
                <IconSvg name="icon-image" />
                Upload
                <input
                  hidden
                  type="file"
                  id="avatar"
                  accept="image/jpg,image/jpeg"
                  onChange={(e) => handleCropImage(e.target.files)}
                />
              </div>
            </label>
          </div>
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
                <Form.Item name="avatar" label="">
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
                </Form.Item>

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

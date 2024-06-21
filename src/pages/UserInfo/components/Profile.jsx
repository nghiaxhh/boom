import { Col, Divider, Form, Image, Input, Row, Spin, Upload } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import IconSvg from '../../../components/IconSvg'
import { getBase64 } from '../../../helper/utils'
import Button from '../../../components/Button'
import UserServices from '../../../services/UserServices'
import FileServices from '../../../services/FileServices'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
import { useQueryMe } from '../../../hook/useQueryMe'
import { FaCheck } from 'react-icons/fa'
import { GoCopy } from 'react-icons/go'

function Profile() {
  const [form] = Form.useForm()
  const fileCoverRef = useRef()
  const { user } = useSelector((state) => state.common)
  const { getInfo, loading: loadingQuery } = useQueryMe()

  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [isCopied, setIsCopied] = useState(false)
  const [changeAvatar, setChangeAvatar] = useState(false)
  const [changeCoverImg, setChangeCoverImg] = useState(false)
  const [fileCover, setFileCover] = useState({})
  const [linkImg, setLinkImg] = useState('')
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
    if (newFileList[0]?.size > 1024 * 5 * 1024) {
      return toast.error('File size larger than 5MB')
    }
    setChangeAvatar(true)
    setFileAvatar(newFileList)
  }

  useEffect(() => {
    form.setFieldsValue({
      referalID: user.referalID,
      fullname: user.fullname,
      email: user.email,
      description: user.description,
    })
    !!user.avatarUrl &&
      setFileAvatar([
        {
          url: user.avatarUrl,
        },
      ])
    setLinkImg(
      user.coverImg
        ? user.coverImg
        : process.env.PUBLIC_URL + '/image/cover_image.png'
    )
  }, [user])

  // handle submit form
  const handleSubmit = async () => {
    const values = form.getFieldsValue()

    let responAvatar = null
    let responCover = null
    setLoading(true)
    if (fileAvatar.length && changeAvatar) {
      responAvatar = await FileServices.uploadFile({
        file: fileAvatar[0]?.originFileObj,
      })
    }
    if (!!fileCover && changeCoverImg) {
      responCover = await FileServices.uploadFile({
        file: fileCover,
      })
    }

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
      setDisabled(true)
    }
    setLoading(false)
  }

  const handleChangeCoverPhoto = () => {
    const uploadedFile = fileCoverRef.current.files[0]
    const cachedURL = URL.createObjectURL(uploadedFile)
    if (uploadedFile?.size > 1024 * 5 * 1024)
      return toast.error('File size larger than 5MB')
    setChangeCoverImg(true)
    setLinkImg(cachedURL)
    setFileCover(uploadedFile)
  }

  return (
    <Spin spinning={loading || loadingQuery}>
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
          <div className="group relative mb-6">
            <img src={linkImg} alt="" className="h-[200px] w-full" />

            <label className="absolute left-0 top-0  flex h-[200px] w-full cursor-pointer items-center justify-center">
              <div className="hidden text-white group-hover:block">
                <IconSvg name="icon-image" />
                Upload
              </div>
              <input
                disabled={disabled}
                hidden
                ref={fileCoverRef}
                type="file"
                id="avatar"
                accept="image/*.png,.jpg"
                onChange={handleChangeCoverPhoto}
              />
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
                  <Input
                    readOnly
                    suffix={
                      isCopied ? (
                        <FaCheck
                          className="cursor-pointer"
                          size={22}
                          color="green"
                        />
                      ) : (
                        <GoCopy
                          size={20}
                          className="cursor-pointer"
                          onClick={() => {
                            setIsCopied(true)
                            navigator.clipboard.writeText(user.referalID)
                            setTimeout(() => {
                              setIsCopied(false)
                            }, 1500)
                          }}
                        />
                      )
                    }
                  />
                </Form.Item>
                <Form.Item name="fullname" label="Game name">
                  <Input disabled={disabled} />
                </Form.Item>
                <Form.Item name="email" label="Email">
                  <Input readOnly />
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
                    beforeUpload={() => {
                      // setFileAvatar([...fileAvatar, file])
                      return false
                    }}
                  >
                    {fileAvatar.length < 1 && 'Avatar'}
                  </Upload>
                </Form.Item>

                <div>Maximum capacity 5 MB</div>
                <div>Format: .JPG, .JPEG, .PNG</div>
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

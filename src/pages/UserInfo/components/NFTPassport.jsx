import { Divider, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import UserServices from 'services/UserServices'

const NFTPassport = () => {
  const [loading, setLoading] = useState(false)
  const [imgSrc, setImgSrc] = useState('')
  const [info, setInfo] = useState()

  const getPassport = () => {
    setLoading(true)
    UserServices.getPassport()
      .then((res) => {
        console.log(res)
        if (res?.isOk) {
          const data = res.data.balance[0]
          setInfo(data)
          setImgSrc(data?.img ? data.img : '/image/passport.png')
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getPassport()
  }, [])

  return (
    <div className="border-[1px] border-solid border-[#d9d9d9]">
      <div className="flex justify-between px-[26px] py-7">
        <div className="font-semibold">NFT Passport</div>
      </div>
      <Divider />
      <Spin spinning={loading}>
        <div
          className="border-[rgba(0, 0, 0, 0.2)] mx-auto my-[62px]
flex w-[310px] flex-col rounded-[10px] border border-solid shadow-[0_4px_5px_1px_rgba(0,0,0,0.25)]"
        >
          <img
            src={imgSrc}
            alt=""
            className="mx-auto mt-4 w-[280px] rounded-t-[10px]"
          />

          <div className="relative -top-2 w-full px-[22px]">
            <div className="mb-7 flex w-full items-center justify-between">
              <div className="rounded-[5px] bg-[#D9D9D9] shadow-[0_4px_10px_0_rgba(0,0,0,0.5)]">
                <img
                  src={'/image/header_logo.png'}
                  alt=""
                  className="px-[3px] py-[9px]"
                />
              </div>
              <div className="text-lg font-semibold uppercase">
                {info?.name}
              </div>
              <img src={'./image/check.png'} alt="" />
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-col gap-[10px]">
                <div>Card ID</div>
                <div className="text-lg font-semibold">{info?.tokenId}</div>
              </div>
              <div className="text-xl font-bold">NFT PASSPORT</div>
            </div>
          </div>
        </div>
      </Spin>
    </div>
  )
}

export default NFTPassport

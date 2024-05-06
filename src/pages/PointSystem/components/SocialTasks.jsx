import { Divider, Input } from 'antd'
import React from 'react'
import IconSvg from '../../../components/SvgIcon'
import Button from '../../../components/Button'
import { ReactComponent as BlueCheck } from '../../../assets/images/blue_check.svg'

const SocialTasks = () => {
  return (
    <div className="[1px] border-solid border-[#d9d9d9]">
      <div className="flex justify-between px-[26px] py-7">
        <div className="font-semibold">Referral Reward Points</div>
      </div>
      <Divider />
      <div className="flex flex-col gap-6">
        <div className="m-5 flex rounded-[10px] border-[1px] border-solid border-[#0000001A] bg-[#FBFDFF] px-[18px] py-3">
          <div>
            <div className="mb-3 text-lg font-semibold">
              Refer friends and earn rewards!
            </div>
            <div className="mb-6">
              Introduce a friend to BOOM and you’ll earn 10% the points earned
              by your friend and get a bonus to accelerate your own points
              growth
            </div>
            <div className="mb-2 text-xs text-[#FF9C09]">
              You can change your referral code only once.
            </div>
            <div className="flex gap-3">
              <Input style={{ width: 300, borderRadius: 10 }} />
              <IconSvg name="icon-x" />
              <IconSvg name="icon-discord" />
              <IconSvg name="icon-gmail" />
            </div>
          </div>
          <div className="flex w-[500px] flex-col items-end gap-6">
            <BlueCheck />
            <Button>100 Points</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialTasks

import React from 'react'
import ModalCommon from './../../components/ModalCommon/index'
import { Input } from 'antd'
import IconSvg from '../../components/SvgIcon'
// import { ReactComponent as BlueCheck } from '../../assets/images/blue_check.svg'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from '../../routes/route.constant'

function ModalClaimReward({ isOpen, onOk, onCancel }) {
  const navigate = useNavigate()
  return (
    <ModalCommon
      onOk={onOk}
      onCancel={onCancel}
      open={isOpen}
      title={
        <div className="flex flex-col items-center">
          <div>Current Balance</div>
          <div>6000</div>
          <div className="flex gap-1">
            <IconSvg name="icon-flash-fill" />
            <div>2.0 Boost</div>
          </div>
          <div>Out of 10,000 points distributed</div>
        </div>
      }
      footer={
        <div
          className="flex justify-center"
          onClick={() => {
            onCancel()
            navigate(ROUTE_PATH.CURRENT_BALANCE)
          }}
        >
          <Button>View details</Button>
        </div>
      }
    >
      <div className="m-5 flex justify-between rounded-[10px] border-[1px] border-solid border-[#0000001A] bg-[#FBFDFF] px-[18px] py-3">
        <div>
          <div className="mb-3 text-lg font-semibold">
            Claim your daily points
          </div>

          <div className="mb-2 text-xs text-[#FF9C09]">
            You can claim every 6 hours
          </div>
        </div>
        <div className="flex items-center">
          <Button>Claim</Button>
        </div>
      </div>
      <div className="m-5 flex justify-between rounded-[10px] border-[1px] border-solid border-[#0000001A] bg-[#FBFDFF] px-[18px] py-3">
        <div>
          <div className="mb-3 text-lg font-semibold">
            Refer friends and earn rewards!
          </div>
          {/* <div className="mb-6">
              Introduce a friend to BOOM and you’ll earn 10% the points earned
              by your friend and get a bonus to accelerate your own points
              growth
            </div> */}
          <div className="mb-2 text-xs text-[#FF9C09]">
            Earn 10% of total points from referred user
          </div>
          <div className="flex gap-3">
            <Input style={{ width: 200, borderRadius: 10 }} />
            <IconSvg name="icon-x" />
            <IconSvg name="icon-discord" />
            <IconSvg name="icon-gmail" />
          </div>
        </div>
        <div className="flex items-center">
          <Button>Set link</Button>
        </div>
      </div>
      <div className="m-5 flex justify-between rounded-[10px] border-[1px] border-solid border-[#0000001A] bg-[#FBFDFF] px-[18px] py-3">
        <div>
          <div className="mb-3 text-lg font-semibold">Win a match</div>

          <div className="mb-2 text-xs text-[#FF9C09]">
            Earn 10 points per match
          </div>
        </div>
        <div className="flex items-center">
          <Button>3,000</Button>
        </div>
      </div>
      <div className="m-5 flex justify-between rounded-[10px] border-[1px] border-solid border-[#0000001A] bg-[#FBFDFF] px-[18px] py-3">
        <div>
          <div className="mb-3 text-lg font-semibold">Play 10 matches</div>

          <div className="mb-2 text-xs text-[#FF9C09]">
            Earn 10 points by playing 10 matches. Once per day
          </div>
        </div>
        <div className="flex items-center">
          <Button>3,000</Button>
        </div>
      </div>
      <div className="m-5 flex justify-between rounded-[10px] border-[1px] border-solid border-[#0000001A] bg-[#FBFDFF] px-[18px] py-3">
        <div>
          <div className="mb-3 text-lg font-semibold">Play 20 matches</div>

          <div className="mb-2 text-xs text-[#FF9C09]">
            Earn 30 points by playing 20 matches. Once per day
          </div>
        </div>
        <div className="flex items-center">
          <Button>3,000</Button>
        </div>
      </div>
    </ModalCommon>
  )
}

export default ModalClaimReward

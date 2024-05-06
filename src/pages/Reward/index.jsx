import { Divider, Tabs } from 'antd'
import React from 'react'
import Button from '../../components/Button'
import IconSvg from '../../components/SvgIcon'
import { LayoutCommon } from '../../layouts/styled'
import Breakdown from './components/Breakdown'
import Referral from './components/Referral'
import TopRanking from './components/TopRanking'
import { RewardWrapper } from './styled'

function Reward() {
  const items = [
    {
      label: `Breakdown`,
      key: 1,
      children: <Breakdown />,
    },
    {
      label: `Referral`,
      key: 2,
      children: <Referral />,
    },
    {
      label: `Top 100`,
      key: 3,
      children: <TopRanking />,
    },
  ]
  return (
    <RewardWrapper>
      <LayoutCommon>
        <div className="flex flex-col items-center">
          <div className="text-[32px]">Current Balance</div>
          <div className="my-4 flex w-full items-center justify-between">
            <div className="flex flex-col items-center gap-2">
              <Button> Claim points</Button>
              <div>You can claim every 6 hours</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-[32px]">70,000,000</div>
              <div className="flex gap-1">
                <IconSvg name="icon-flash-fill" />
                <div>2.0x Boost</div>
              </div>
            </div>
            <div>How to get boosted?</div>
          </div>
          <div>Out of 10,000 points distributed</div>
        </div>
        <Divider />
        <div className="mb-6 flex justify-between border-[1px] border-solid border-[#000000] p-4">
          <div>
            <div>Referral</div>
            <div>Earn 10% of total points from referred user</div>
          </div>
          <div>
            <div className="flex gap-3">
              <div className="flex items-center rounded-[10px] border-[1px] border-solid px-4 py-1">
                https://www.ensofi.xyz/A125xx
              </div>
              <IconSvg name="icon-x" />
            </div>
          </div>
        </div>
        <Tabs type="card" items={items} />
      </LayoutCommon>
    </RewardWrapper>
  )
}

export default Reward

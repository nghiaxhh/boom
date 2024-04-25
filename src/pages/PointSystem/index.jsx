import { Col, Divider, Row } from 'antd'
import React, { useState } from 'react'
import { LayoutCommon } from '../../layouts/styled'
import { PointSystemWrapper } from './styled'
import SocialTasks from './components/SocialTasks'

function PointSystem() {
  const [tabActive, setTabActive] = useState(1)
  return (
    <PointSystemWrapper>
      <LayoutCommon>
        <div className="mb-6 flex h-[100px]  items-center justify-between bg-[#FFF7E6] px-6">
          <div className=" text-xl font-semibold">Point System</div>
          <div className="flex items-center ">
            <img src={'./image/medal.png'} alt="" height={90} />
            <div className="flex flex-col  items-center">
              <div>Boom Arena Badge</div>
              <div>X2 Points</div>
            </div>
          </div>
        </div>
        <Row gutter={32}>
          <Col span={6}>
            <div className="rounded-lg bg-[#F8F8F8] px-4">
              <div className="flex h-12 items-center gap-2">Leaderboard</div>
              <Divider />

              <div
                className={`flex h-12  cursor-pointer items-center ${tabActive === 1 && 'text-[#FF9C09]'}`}
                onClick={() => setTabActive(1)}
              >
                Social tasks
              </div>
              <Divider />
              <div
                className={`flex h-12  cursor-pointer items-center ${tabActive === 2 && 'text-[#FF9C09]'}`}
                onClick={() => setTabActive(2)}
              >
                Airdrop token
              </div>

              <Divider />
              <div
                className="flex  h-12 cursor-pointer items-center gap-2 "
                onClick={() => setTabActive(2)}
              >
                Referral Program
              </div>
            </div>
          </Col>
          <Col span={18}>
            <SocialTasks />
          </Col>
        </Row>
      </LayoutCommon>
    </PointSystemWrapper>
  )
}

export default PointSystem

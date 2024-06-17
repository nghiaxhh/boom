import React, { useState } from 'react'
import { LayoutCommon } from '../styled'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from '../../routes/route.constant'
import ModalClaimReward from '../../pages/HomePage/components/ModalClaimReward'
import { useSelector } from 'react-redux'

function Navbar() {
  const navigate = useNavigate()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { user } = useSelector((state) => state.common)

  return (
    <div className="z-[99] h-[70px] bg-white leading-[70px] shadow-[0_10px_20px_0_#0000000D]">
      <LayoutCommon>
        <div className="flex items-center justify-between">
          <div
            className="flex cursor-pointer items-center gap-3"
            onClick={() => navigate(ROUTE_PATH.HOME)}
          >
            <img
              src={process.env.PUBLIC_URL + '/image/header_logo.png'}
              alt=""
            />
            <div className="font-['Bebas_Neue'] text-[32px] uppercase text-[#FF9C09] ">
              boom arena
            </div>
          </div>
          <div className="flex items-center gap-[60px]">
            <div className="flex items-center gap-6">
              <div className="cursor-pointer">Game</div>

              <div className="cursor-pointer">Marketplace</div>
            </div>
            <div
              className="flex cursor-pointer items-center gap-2 font-bold"
              onClick={() => setIsOpenModal(true)}
            >
              <div>
                <img src="./image/circle_star.png" alt="" />
              </div>
              {user.curr_points}
            </div>
            <div
              className="flex h-12 cursor-pointer items-center gap-[25px]"
              onClick={() => navigate(ROUTE_PATH.USER_INFO)}
            >
              <img src={user.avatarUrl ?? './image/avatar.png'} alt="" />
            </div>
          </div>
        </div>
        {isOpenModal && (
          <ModalClaimReward
            isOpen={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            onOk={() => setIsOpenModal(false)}
          />
        )}
      </LayoutCommon>
    </div>
  )
}

export default Navbar

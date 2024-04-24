import React from 'react'
import { LayoutCommon } from '../styled'

function Navbar() {
  return (
    <div className="z-[9999] h-[70px] bg-white leading-[70px] shadow-[0_10px_20px_0_#0000000D]">
      <LayoutCommon>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
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
              <div>Game</div>
              <div>Point System</div>
              <div>Marketplace</div>
            </div>
            <div className="flex items-center gap-[25px]"></div>
          </div>
        </div>
      </LayoutCommon>
    </div>
  )
}

export default Navbar

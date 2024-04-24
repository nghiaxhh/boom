import React from 'react'
import { ReactComponent as Logo } from '../../assets/images/boom_arena.svg'
import { LayoutCommon } from '../../layouts/styled'
import { HomePageWrapper } from './styled'

function HomePage() {
  return (
    <HomePageWrapper>
      <div className="background-header">
        <LayoutCommon className="flex flex-col items-start justify-center">
          <Logo className="h-[234px] w-[307px]" />
          <div className="my-10 w-[432px] text-justify text-base font-bold text-white">
            BOOM ARENA is an engaging play-and-earn game that offers a thrilling
            real-time PvP battle experience. Its core principles are fairness,
            fun, and freedom. Designed to attract Clash Royale fans, the game
            blends the excitement of intense battles with the financial benefits
            of blockchain technology.
          </div>
          <img src="./image/download_now.png" alt="" />
          <div className="flex">
            <img src="./image/chplay.png" alt="" className="cursor-pointer" />
            <img src="./image/appstore.png" alt="" className="cursor-pointer" />
          </div>
        </LayoutCommon>
      </div>
    </HomePageWrapper>
  )
}

export default HomePage

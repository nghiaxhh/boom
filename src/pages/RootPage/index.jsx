import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/images/boom_arena.svg'
import Button from '../../components/Button'
import { LayoutCommon } from '../../layouts/styled'
import { ROUTE_PATH } from '../../routes/route.constant'
import { RootPageWrapper } from './styled'

function RootPage() {
  const naigate = useNavigate()
  return (
    <RootPageWrapper>
      <div className="h-[70px] bg-white leading-[70px]">
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
              {/* <div className="flex items-center gap-6">
                <div>Game</div>
                <div>Point System</div>
                <div>Marketplace</div>
              </div> */}
              <div className="flex items-center gap-[25px]">
                <Button onClick={() => naigate(ROUTE_PATH.SIGN_UP)}>
                  Sign Up
                </Button>
                <Button onClick={() => naigate(ROUTE_PATH.LOGIN)}>Login</Button>
              </div>
            </div>
          </div>
        </LayoutCommon>
      </div>

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
    </RootPageWrapper>
  )
}

export default RootPage

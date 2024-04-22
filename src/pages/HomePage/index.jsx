import React from 'react'
import { LayoutCommon } from '../../layouts/styled'
import Button from '../../components/Button'
import { HomePageWrapper } from './styled'

function HomePage() {
  return (
    <HomePageWrapper>
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
              <div className="flex items-center gap-6">
                <div>Game</div>
                <div>Point System</div>
                <div>Marketplace</div>
              </div>
              <div className="flex items-center gap-[25px]">
                <Button>Sign Up</Button>
                <Button>Login</Button>
              </div>
            </div>
          </div>
        </LayoutCommon>
      </div>
      <img
        src={process.env.PUBLIC_URL + '/image/bg_homepage.png'}
        className="h-[869px] w-full"
        alt=""
      />
      <div className="abc"></div>
    </HomePageWrapper>
  )
}

export default HomePage

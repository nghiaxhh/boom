import React from 'react'
import { ReactComponent as Logo } from '../../assets/images/boom_arena.svg'
import { HomePageWrapper } from './styled'
import { LayoutCommon } from 'layouts/styled'

function HomePage() {
  return (
    <HomePageWrapper>
      <div className="background-header">
        <LayoutCommon>
          <div className="w-fit">
            <div className="flex flex-col items-center">
              <Logo className="h-36 2xl:h-[234px]" />
              <div className="my-10 w-[432px] text-justify text-base font-bold text-white">
                BOOM ARENA is an engaging play-and-earn game that offers a
                thrilling real-time PvP battle experience. Its core principles
                are fairness, fun, and freedom. Designed to attract Clash Royale
                fans, the game blends the excitement of intense battles with the
                financial benefits of blockchain technology.
              </div>
              <img src="./image/download_now.png" alt="" />
              <div className="flex">
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    window.open(
                      'https://play.google.com/store/apps/details?id=com.circlebox.boomarena',
                      '_blank'
                    )
                  }
                >
                  <img src="./image/chplay.png" alt="" />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    window.open(
                      'https://apps.apple.com/us/app/boom-arena/id6446782218',
                      '_blank'
                    )
                  }
                >
                  <img src="./image/appstore.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </LayoutCommon>
      </div>
    </HomePageWrapper>
  )
}

export default HomePage

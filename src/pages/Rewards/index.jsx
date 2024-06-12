import { Divider, Spin, Tabs } from 'antd'
import dayjs from 'dayjs'
import React, { useEffect, useRef, useState } from 'react'
import { FaCheck } from 'react-icons/fa6'
import { GoCopy } from 'react-icons/go'
import Button from '../../components/Button'
import IconSvg from '../../components/SvgIcon'
import { LayoutCommon } from '../../layouts/styled'
import UserServices from '../../services/UserServices'
import Breakdown from './components/Breakdown'
import Referral from './components/Referral'
import TopRanking from './components/TopRanking'
import { RewardsWrapper } from './styled'

function Rewards() {
  const ref = useRef()
  const [loading, setLoading] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [listMission, setListMission] = useState({})
  const [isValidDailyClaim, setIsValidDailyClaim] = useState(false)
  const [timeCountdown, setTimeCountdown] = useState([])
  const [isClearInterval, setIsClearInterval] = useState(false)

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

  const getClaimRewards = () => {
    setLoading(true)
    UserServices.getRewards()
      .then((res) => {
        if (res.isOk) {
          setListMission(res.data)
          setIsValidDailyClaim(res.data?.daily_allowed)

          if (res.data.daily_allowed) {
            setIsValidDailyClaim(true)
          } else {
            startCountdown(res.data.daily_collected_at)
          }
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  const getCountdown = (timeUp) => {
    const now = dayjs().unix()
    const timeRemaining = dayjs(timeUp).add(13, 'hour').unix() - now

    const hours = Math.floor((timeRemaining % (60 * 60 * 24)) / (60 * 60))
    const minutes = Math.floor((timeRemaining % (60 * 60)) / 60)
    const seconds = Math.floor(timeRemaining % 60)
    if (timeRemaining > 0) setTimeCountdown([hours, minutes, seconds])
    else setIsClearInterval(true)
  }

  const startCountdown = (date) => {
    const id = setInterval(() => {
      getCountdown(date)
    }, 1000)
    ref.current = id
  }

  const handleClaimRewards = (method, points) => {
    setLoading(true)
    UserServices.claimRewards({
      points,
      method,
    })
      .then((res) => {
        if (res.isOk) {
          getClaimRewards()
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getClaimRewards()
    return () => {
      clearInterval(ref.current)
    }
  }, [])

  useEffect(() => {
    if (isClearInterval) {
      clearInterval(ref.current)
      setIsValidDailyClaim(true)
    }
  }, [isClearInterval])

  return (
    <RewardsWrapper>
      <Spin spinning={loading}>
        <LayoutCommon>
          <div className="flex flex-col items-center">
            <div className="text-[32px]">Current Balance</div>
            <div className="my-4 flex w-full items-center justify-between">
              <div className="flex w-[200px] flex-col items-center gap-2">
                <Button
                  disabled={!isValidDailyClaim}
                  onClick={() =>
                    handleClaimRewards('DAILY', listMission?.daily_points)
                  }
                >
                  Claim
                </Button>

                <div className="mb-2 text-xs text-[#FF9C09]">
                  {`You can claim ${isValidDailyClaim ? 'every 6 hours' : `after ${timeCountdown.join(':')}`} `}
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="mt-2 flex items-center gap-1">
                  <img
                    src="./image/circle_star.png"
                    alt=""
                    className="h-[14px]"
                  />
                  <div>{listMission?.point}</div>
                </div>
                {listMission?.boosted && (
                  <div className="flex gap-1">
                    <IconSvg name="icon-flash-fill" />
                    <div>2.0x Boost</div>
                  </div>
                )}
                <div>Out of 10,000 points distributed</div>
              </div>
              <div>How to get boosted?</div>
            </div>
          </div>
          <Divider />
          <div className="mb-6 flex justify-between border-[1px] border-solid border-[#000000] p-4">
            <div>
              <div>Referral</div>
              <div>Earn 10% of total points from referred user</div>
            </div>

            <div className="flex gap-3">
              <div className="relative flex h-[50px] w-[200px] items-center justify-center rounded-[10px] border-[1px] border-solid border-gray-400 font-bold">
                {listMission?.referral_code}

                <div className="absolute right-4 cursor-pointer">
                  {isCopied ? (
                    <FaCheck size={22} color="green" />
                  ) : (
                    <GoCopy
                      size={20}
                      onClick={() => {
                        setIsCopied(true)
                        navigator.clipboard.writeText(
                          listMission?.referral_code
                        )
                        setTimeout(() => {
                          setIsCopied(false)
                        }, 1500)
                      }}
                    />
                  )}
                </div>
              </div>
              <IconSvg name="icon-x" />
              {/* <IconSvg name="icon-discord"  />
              <IconSvg name="icon-gmail" /> */}
            </div>
          </div>
          <Tabs type="card" items={items} />
        </LayoutCommon>
      </Spin>
    </RewardsWrapper>
  )
}

export default Rewards

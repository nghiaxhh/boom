import { Divider, Spin, Tabs } from 'antd'
import dayjs from 'dayjs'
import React, { useEffect, useRef, useState } from 'react'
import { FaCheck } from 'react-icons/fa6'
import { GoCopy } from 'react-icons/go'
import Button from '../../components/Button'
import { LayoutCommon } from '../../layouts/styled'
import UserServices from '../../services/UserServices'
import Breakdown from './components/Breakdown'
import Referral from './components/Referral'
import TopRanking from './components/TopRanking'
import { RewardsWrapper } from './styled'
import { useQueryMe } from '../../hook/useQueryMe'
import IconSvg from '../../components/IconSvg'

function Rewards() {
  const ref = useRef()
  const { getInfo, loading: loadingQuery } = useQueryMe()
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
      children: <Breakdown onLoading={setLoading} />,
    },
    {
      label: `Referral`,
      key: 2,
      children: <Referral onLoading={setLoading} />,
    },
    {
      label: `Top 100`,
      key: 3,
      children: <TopRanking onLoading={setLoading} />,
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
          getInfo()
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
      <Spin spinning={loading || loadingQuery}>
        <LayoutCommon>
          <div className="flex items-center justify-center text-[32px] font-bold">
            Current Balance
          </div>
          <div className="relative w-full">
            <div className="flex flex-col items-center">
              <div className="my-4 flex w-full items-center justify-between">
                <div className="flex w-[200px] flex-col items-center justify-center gap-2">
                  <Button
                    className="claim-point"
                    disabled={!isValidDailyClaim}
                    onClick={() =>
                      handleClaimRewards('DAILY', listMission?.daily_points)
                    }
                  >
                    Claim
                  </Button>

                  <div className="text-xs text-[#FF9C09]">
                    {`You can claim ${isValidDailyClaim ? 'every 6 hours' : `after ${timeCountdown.join(':')}`} `}
                  </div>
                </div>

                <div>
                  <a href="/">How to get boosted?</a>
                </div>
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-1">
                <img
                  src="./image/circle_star.png"
                  alt=""
                  className="h-[18px]"
                />
                <div className="text-lg font-bold">{listMission?.point}</div>
              </div>
              {listMission?.boosted && (
                <div className="flex gap-1">
                  <IconSvg name="icon-flash-fill" />
                  <div>2.0x Boost</div>
                </div>
              )}
              <div className="italic">Out of 10,000 points distributed</div>
            </div>
          </div>
          <Divider />
          <div className="mb-6 flex justify-between border-[1px] border-solid border-[#000000] p-4">
            <div>
              <div className="text-lg font-semibold">Referral</div>
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
              <div
                onClick={() =>
                  window.open(
                    `https://x.com/intent/tweet?text=${listMission?.referral_code}`,
                    '_blank'
                  )
                }
                className="flex cursor-pointer items-center gap-1 rounded-lg border px-4 py-2"
              >
                Share on
                <IconSvg name="icon-twitter" />
              </div>
            </div>
          </div>
          <Tabs type="card" items={items} />
        </LayoutCommon>
      </Spin>
    </RewardsWrapper>
  )
}

export default Rewards

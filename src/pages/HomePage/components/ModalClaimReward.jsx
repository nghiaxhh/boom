import { Spin } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { FaCheck } from 'react-icons/fa6'
import { GoCopy } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Button'
import ModalCommon from '../../../components/ModalCommon/index'
import IconSvg from '../../../components/IconSvg'
import { ROUTE_PATH } from '../../../routes/route.constant'
import UserServices from '../../../services/UserServices'
import dayjs from 'dayjs'
import { useQueryMe } from '../../../hook/useQueryMe'

function ModalClaimReward({ isOpen, onOk, onCancel }) {
  const navigate = useNavigate()
  const ref = useRef()
  const { getInfo, loading: loadingQuery } = useQueryMe()
  const [loading, setLoading] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [listMission, setListMission] = useState({})
  const [isValidDailyClaim, setIsValidDailyClaim] = useState(false)
  const [timeCountdown, setTimeCountdown] = useState([])
  const [isClearInterval, setIsClearInterval] = useState(false)

  const getClaimRewards = () => {
    setLoading(true)
    UserServices.getRewards()
      .then((res) => {
        if (res.isOk) {
          setListMission(res.data)

          if (res.data.daily_allowed) {
            setIsValidDailyClaim(res.data.daily_allowed)
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
    // change timeUp to UTC+7 (+7) and add 24 hours (+24) => 31
    const timeRemaining = dayjs(timeUp).add(31, 'hour').unix() - now
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

  return (
    <ModalCommon
      onOk={onOk}
      onCancel={onCancel}
      open={isOpen}
      title={
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold">Current Balance</div>
          <div className="mt-2 flex items-center gap-1">
            <img src="./image/circle_star.png" alt="" className="h-[14px]" />
            <div>{listMission?.point}</div>
          </div>
          {listMission?.boosted && (
            <div className="flex gap-1">
              <IconSvg name="icon-flash-fill" />
              <div>2.0 Boost</div>
            </div>
          )}
          <div>Out of 10,000 points distributed</div>
        </div>
      }
      footer={
        <div className="flex justify-center">
          <Button
            onClick={() => {
              onCancel()
              navigate(ROUTE_PATH.CURRENT_BALANCE)
            }}
          >
            View details
          </Button>
        </div>
      }
    >
      <Spin spinning={loading || loadingQuery}>
        <div className="m-5 mt-0 flex justify-between rounded-[10px] border-[1px] border-solid border-[#0000001A] bg-[#FBFDFF] px-[18px] py-3">
          <div>
            <div className="mb-3 text-lg font-semibold">
              Claim your daily points
            </div>

            <div className="mb-2 text-xs text-[#FF9C09]">
              {`You can claim ${isValidDailyClaim ? 'every 6 hours' : `after ${timeCountdown.join(':')}`} `}
            </div>
          </div>
          <div className="flex items-center">
            <Button
              className="claim-point"
              disabled={!isValidDailyClaim}
              onClick={() =>
                handleClaimRewards('DAILY', listMission?.daily_points)
              }
            >
              {listMission?.daily_points}
            </Button>
          </div>
        </div>
        <div className="m-5 flex justify-between rounded-[10px] border-[1px] border-solid border-[#0000001A] bg-[#FBFDFF] px-[18px] py-3">
          <div>
            <div className="mb-3 text-lg font-semibold">
              Refer friends and earn rewards!
            </div>
            {/* <div className="mb-6">
              Introduce a friend to BOOM and you’ll earn 10% the points earned
              by your friend and get a bonus to accelerate your own points
              growth
            </div> */}
            <div className="mb-2 text-xs text-[#FF9C09]">
              Earn 10% of total points from referred user
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
          <div className="flex items-center">
            <Button className="claim-point" disabled>
              {listMission?.referred_points}
            </Button>
          </div>
        </div>
        <div className="m-5 flex justify-between rounded-[10px] border-[1px] border-solid border-[#0000001A] bg-[#FBFDFF] px-[18px] py-3">
          <div>
            <div className="mb-3 text-lg font-semibold">Win a match</div>

            <div className="mb-2 text-xs text-[#FF9C09]">
              Earn 1000 points per match
            </div>
          </div>
          <div className="flex items-center">
            <Button
              className="claim-point"
              disabled={!listMission?.winning_matches_allowed}
              onClick={() => {
                handleClaimRewards(
                  'WINNING_MATCHES',
                  listMission?.winning_matches_points
                )
              }}
            >
              {listMission?.winning_matches_points}
            </Button>
          </div>
        </div>
        <div className="m-5 flex justify-between rounded-[10px] border-[1px] border-solid border-[#0000001A] bg-[#FBFDFF] px-[18px] py-3">
          <div>
            <div className="mb-3 text-lg font-semibold">Play 10 matches</div>

            <div className="mb-2 text-xs text-[#FF9C09]">
              Earn 10.000 points by playing 10 matches. Once per day
            </div>
          </div>
          <div className="flex items-center">
            <Button
              className="claim-point"
              disabled={!listMission?.ten_matches_allowed}
              onClick={() =>
                handleClaimRewards(
                  'TEN_MATCHES',
                  listMission?.ten_matches_points
                )
              }
            >
              {listMission?.ten_matches_points}
            </Button>
          </div>
        </div>
        <div className="m-5 mb-0 flex justify-between rounded-[10px] border-[1px] border-solid border-[#0000001A] bg-[#FBFDFF] px-[18px] py-3">
          <div>
            <div className="mb-3 text-lg font-semibold">Play 20 matches</div>

            <div className="mb-2 text-xs text-[#FF9C09]">
              Earn 40.000 points by playing 20 matches. Once per day
            </div>
          </div>
          <div className="flex items-center">
            <Button
              className="claim-point"
              disabled={!listMission?.twenty_matches_allowed}
              onClick={() =>
                handleClaimRewards(
                  'TWENTY_MATCHES',
                  listMission?.twenty_matches_points
                )
              }
            >
              {listMission?.twenty_matches_points}
            </Button>
          </div>
        </div>
      </Spin>
    </ModalCommon>
  )
}

export default ModalClaimReward

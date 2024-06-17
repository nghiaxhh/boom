import { useState } from 'react'
import UserServices from '../services/UserServices'
import { useDispatch } from 'react-redux'
import { changeInfoUser } from '../store/commonSlice'

export const useQueryMe = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const getInfo = () => {
    setLoading(true)
    UserServices.getMe()
      .then((res) => {
        if (res.isOk) {
          const userInfo = res.data

          dispatch(
            changeInfoUser({
              ...userInfo,
              referalID: userInfo.referral_code,
              fullname: userInfo.fullname,
              email: userInfo.username,
              description: userInfo.description,

              ...(!!userInfo?.profile_img && {
                avatarUrl:
                  process.env.REACT_APP_API +
                  '/api/v1/files/download?fileName=' +
                  userInfo?.profile_img,
              }),
              ...(!!userInfo?.cover_img && {
                coverImg:
                  process.env.REACT_APP_API +
                  '/api/v1/files/download?fileName=' +
                  userInfo?.cover_img,
              }),
            })
          )
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  return {
    loading,
    getInfo,
  }
}

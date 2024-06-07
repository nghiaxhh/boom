import http from '.'
import {
  apiChangePass,
  apiGetMe,
  apiGetRewards,
  apiUpdateUser,
} from './apiRouter'

const getMe = () => http.get(apiGetMe)
const updateUser = (body) => http.put(apiUpdateUser, body)
const changePassword = (body) => http.post(apiChangePass, body)
const getRewards = () => http.get(apiGetRewards)
const claimRewards = (body) => http.post(apiGetRewards, body)

const UserServices = {
  getMe,
  updateUser,
  changePassword,
  getRewards,
  claimRewards,
}

export default UserServices

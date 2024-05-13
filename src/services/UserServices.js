import http from '.'
import { apiChangePass, apiGetMe, apiUpdateUser } from './apiRouter'

const getMe = () => http.get(apiGetMe)
const updateUser = (body) => http.put(apiUpdateUser, body)
const changePassword = (body) => http.post(apiChangePass, body)

const UserServices = {
  getMe,
  updateUser,
  changePassword,
}

export default UserServices

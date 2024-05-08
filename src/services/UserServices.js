import http from '.'
import { apiGetMe, apiUpdateUser } from './apiRouter'

const getMe = () => http.get(apiGetMe)
const updateUser = (body) => http.put(apiUpdateUser, body)

const UserServices = {
  getMe,
  updateUser,
}

export default UserServices

import http from '.'
import { apiGetMe } from './apiRouter'

const getMe = () => http.get(apiGetMe)

const UserServices = {
  getMe,
}

export default UserServices

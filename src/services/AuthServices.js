import http from '.'
import { apiLogin, apiLogout } from './apiRouter'

const login = (body) =>
  http.post(apiLogin, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

const logout = (body) => http.post(apiLogout, body)

const AuthServices = {
  login,
  logout,
}

export default AuthServices

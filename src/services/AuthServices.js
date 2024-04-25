import http from '.'
import { apiLogin, apiLogout, apiSignUp } from './apiRouter'

const logIn = (body) =>
  http.post(apiLogin, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

const logOut = (body) => http.post(apiLogout, body)
const signUp = (body) => http.post(apiSignUp, body)

const AuthServices = {
  logIn,
  logOut,
  signUp,
}

export default AuthServices

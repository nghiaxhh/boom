import http from '.'
import {
  apiConfirmEmail,
  apiLogin,
  apiLogout,
  apiResetPassword,
  apiSignUp,
} from './apiRouter'

const logIn = (body) =>
  http.post(apiLogin, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

const logOut = (body) => http.post(apiLogout, body)
const signUp = (body) => http.post(apiSignUp, body)
const resetPassword = (body) => http.post(apiResetPassword, body)
const confirmEmail = (body) => http.post(`${apiConfirmEmail}/${body.email}`)

const AuthServices = {
  logIn,
  logOut,
  signUp,
  resetPassword,
  confirmEmail,
}

export default AuthServices

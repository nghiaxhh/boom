import axios from 'axios'
import { TOKEN_KEY } from '../helper/constants'
import { getAccessToken, getRefreshToken, parseJwt } from '../helper/utils'
import { ROUTE_PATH } from '../routes/route.constant'
import { toast } from 'sonner'

const http = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
})

let refreshTokenRequest = null

http.interceptors.request.use(
  async (config) => {
    const accessToken = getAccessToken() ?? ''
    const timeExpiredAccessToken = parseJwt(accessToken)?.exp

    const refreshToken = getRefreshToken()

    const handleRefreshToken = () =>
      axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/refresh`,
        undefined,
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      )

    if (timeExpiredAccessToken * 1000 < Date.now()) {
      refreshTokenRequest = refreshTokenRequest
        ? refreshTokenRequest
        : handleRefreshToken()
      const result = await refreshTokenRequest

      refreshTokenRequest = null
      localStorage.setItem(TOKEN_KEY, JSON.stringify(result.data.data))
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${result.data.data.access_token}`,
      }
      return config
    }

    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    }

    return config
  },
  (error) => Promise.reject(error)
)

http.interceptors.response.use(
  (response) => {
    // Xử lý và định dạng dữ liệu nhận được từ API ở đây

    return {
      ...response.data,
      isOk: true,
    }
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear()
      window.location.href = ROUTE_PATH.LOGIN
    }
    toast.error(error?.response?.data?.message)
    return Promise.reject(error)
  }
)

export default http

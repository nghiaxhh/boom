/* eslint-disable no-useless-escape */
/* eslint-disable no-empty */
import dayjs from 'dayjs'
import { TOKEN_KEY } from './constants'

export const getAuthLocalStorage = () => {
  try {
    const authData = localStorage.getItem(TOKEN_KEY)
    return authData && JSON.parse(authData)
  } catch (error) {}
}

export const formatMoney = (money) => {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const getAccessToken = () => {
  const data = getAuthLocalStorage()
  return data?.access_token || ''
}

export const getRefreshToken = () => {
  const data = getAuthLocalStorage()
  return data?.refresh_token || ''
}

export const isValidEmail = () => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  return regex
}

export const isValidPhoneNumber = () => {
  const regex = /^(?=.*\d).{10,11}$/
  return regex
}

export const disabledDate = (current, preDay) => {
  if (preDay) return current && current > dayjs(preDay)
  return current && current > dayjs().startOf('day')
}

export const getMonthDateRange = (year, month) => {
  const fromDate = new Date(year, month - 1, 1)

  const toDate = new Date(year, month, 0)

  return {
    fromDate: dayjs(fromDate).format('YYYY-MM-DD'),
    toDate: dayjs(toDate).format('YYYY-MM-DD'),
  }
}

export const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]))
  } catch (e) {
    return null
  }
}

export const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

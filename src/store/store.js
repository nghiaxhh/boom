import { configureStore } from '@reduxjs/toolkit'
import commonReducer from './commonSlice'

export const store = configureStore({
  reducer: {
    common: commonReducer,
  },
})

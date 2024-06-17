import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  enumType: {},
  listCost: [],
  listProject: [],
  listVendor: [],
  listEmployee: [],
  user: {},
}

export const commonSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeEnumType: (state, actions) => {
      state.enumType = actions.payload
    },
    getListCost: (state, actions) => {
      state.listCost = actions.payload
    },
    getListVendor: (state, actions) => {
      state.listVendor = actions.payload
    },
    getListProject: (state, actions) => {
      state.listProject = actions.payload
    },
    getListEmployee: (state, actions) => {
      state.listEmployee = actions.payload
    },
    changeInfoUser: (state, actions) => {
      state.user = actions.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  changeEnumType,
  getListCost,
  getListVendor,
  getListProject,
  getListEmployee,
  changeInfoUser,
} = commonSlice.actions

export default commonSlice.reducer

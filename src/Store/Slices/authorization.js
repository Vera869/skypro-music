import { createSlice } from '@reduxjs/toolkit'

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: {
    access: JSON.parse(localStorage.getItem('accessToken')),
    refresh: JSON.parse(localStorage.getItem('refreshToken')),
  },
  reducers: {
    setAccess(state, action) {
      state.access = action.payload
    },
    setRefresh(state, action) {
      state.refresh = action.payload
    },
  },
})

export const { setAccess, setRefresh } = authorizationSlice.actions
export const authorizationSliceReducer = authorizationSlice.reducer

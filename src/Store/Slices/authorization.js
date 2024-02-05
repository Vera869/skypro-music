import { createSlice } from '@reduxjs/toolkit'

const authorizationSlice = createSlice({
   name: 'authorization',
   initialState: {
      access: '',
      refresh: '',
   },
   reducers: {
      setAccess(state, action) {
         state.access = action.payload
      },
      setRefresh(state, action) {
         state.refresh = action.payload
      },
      setAuthorisation(state) {
         state.isAuthorisation= action.payload
       },
   }
})

export const {setAccess, setRefresh} = authorizationSlice.actions
export const authorizationSliceReducer = authorizationSlice.reducer
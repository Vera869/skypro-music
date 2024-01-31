import { configureStore } from '@reduxjs/toolkit'
import { trackReducer } from './Slices/sliceTrack'
// import thunk from 'redux-thunk'

export const store = configureStore({
  reducer: {
    tracks: trackReducer,
  },
//   middleware: [thunk],
})

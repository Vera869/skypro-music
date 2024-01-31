import { configureStore } from '@reduxjs/toolkit'
import { trackReducer } from './Slices/sliceTrack'
// import musicApiReducer, { musicApi } from '../Services'
// import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

export const store = configureStore({
  reducer: {
    tracks: trackReducer,
  },
//   middleware: ,
})

// export const store = configureStore({
//   reducer: {
//     player: playerReducer,
//     [musicApi.reducerPath]: musicApiReducer
//   },
//   middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(musicApi.middleware),
// })
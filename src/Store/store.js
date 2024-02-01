import { configureStore } from '@reduxjs/toolkit'



import { trackReducer } from './Slices/sliceTrack'
export const store = configureStore({
  reducer: {
    tracks: trackReducer,
  },
})



// import musicApiReducer, { musicApi } from '../Services/index'
// export const store = configureStore({
//   reducer: {
//     // player: playerReducer,
//     [musicApi.reducerPath]: musicApiReducer
//   },
//   middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(musicApi.middleware),
//})
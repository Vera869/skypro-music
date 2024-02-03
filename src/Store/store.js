import { configureStore } from '@reduxjs/toolkit'
import { trackReducer } from './Slices/sliceTrack'
import musicTracksApiReducer, { musicTracksApi } from '../Services'

export const store = configureStore({
  reducer: {
    tracks: trackReducer,
    [musicTracksApi.reducerPath]: musicTracksApiReducer,
  },
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware().concat(musicTracksApi.middleware),
})

// import musicTracksApiReducer, { musicTracksApi } from '../Services/index'
// export const store = configureStore({
//   reducer: {
//     // player: playerReducer,
//     [musicTracksApi.reducerPath]: musicTracksApiReducer
//   },
//   middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(musicTracksApi.middleware),
//})

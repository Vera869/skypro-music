import { configureStore } from '@reduxjs/toolkit'



import { trackReducer } from './Slices/sliceTrack'
export const store = configureStore({
  reducer: {
    tracks: trackReducer,
  },
})



// import getFavTracksApiReducer, { getFavTracksApi } from '../Services/index'
// export const store = configureStore({
//   reducer: {
//     // player: playerReducer,
//     [getFavTracksApi.reducerPath]: getFavTracksApiReducer
//   },
//   middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(getFavTracksApi.middleware),
//})
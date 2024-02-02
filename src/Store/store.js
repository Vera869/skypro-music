import { configureStore } from '@reduxjs/toolkit'
import { trackReducer } from './Slices/sliceTrack'
import getFavTracksApiReducer, {getFavTracksApi}from '../Services'



export const store = configureStore({
  reducer: {
    tracks: trackReducer,
    [getFavTracksApi.reducerPath]: getFavTracksApiReducer
  },
  middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(getFavTracksApi.middleware),
})



// import getFavTracksApiReducer, { getFavTracksApi } from '../Services/index'
// export const store = configureStore({
//   reducer: {
//     // player: playerReducer,
//     [getFavTracksApi.reducerPath]: getFavTracksApiReducer
//   },
//   middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(getFavTracksApi.middleware),
//})
import { configureStore } from '@reduxjs/toolkit'
import { trackReducer } from './Slices/sliceTrack'
import musicTracksApiReducer, { musicTracksApi } from '../Services'
import { authorizationSliceReducer } from './Slices/authorization'
import { setFiltersReducer } from './Slices/sliceFilter'

export const store = configureStore({
  reducer: {
    tracks: trackReducer,
    authorization: authorizationSliceReducer,
    [musicTracksApi.reducerPath]: musicTracksApiReducer,
    setFilters: setFiltersReducer,
  },
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware().concat(musicTracksApi.middleware),
})

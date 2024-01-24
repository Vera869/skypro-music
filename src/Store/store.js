import { configureStore } from "@reduxjs/toolkit";
import { trackReducer } from './Slices/sliceTrack'

export const store = configureStore ({
   reducer: {
      tracks: trackReducer
   },
   // reducer: {

   // }, 
   // reducer: {

   // }, 
   // reducer: {

   // },
})

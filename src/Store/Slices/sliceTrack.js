import { createSlice } from '@reduxjs/toolkit'

const trackSlice = createSlice({
    name: 'tracks',
    initialState: {
        activeTrack: {},
        tracks: [],
    },
    reducers:  {
        setTracks(state, action) {
            state.tracks = action.payload.tracks
        },
        setPlayingTrack(state, action) {
            console.log(state)
            console.log(action)
            state.activeTrack = action.payload.track
        },
        // playNextTrack(state, action) {

        // },
        // playPrevTrack(state, action) {

        // },
        // playRandomTrack(state, action) {

        // },
    },
})

export const {
    setTracks,
    setPlayingTrack,
    playNextTrack,
    playPrevTrack,
    playRandomTrack,
} = trackSlice.actions

export const trackReducer = trackSlice.reducer
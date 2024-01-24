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
            state.shuffledTracks = [...action.payload.tracks].sort(
                () => Math.random() - 0.5,
            )
            console.log(state.tracks)
        },
        setActiveTrack(state, action) {
            state.activeTrack = action.payload.track
        },
        setIsShuffled(state) {
            state.isShuffled = !state.isShuffled
            if (state.isShuffled) {
                state.shuffledTracks.sort(() => Math.random() - 0.5)
            }
        },
        playNextTrack(state) {
            const playlist = state.isShuffled
                ? state.shuffledTracks
                : state.tracks
                const indexCurrentTrack = playlist.findIndex((track) => {
                    return track.id === state.activeTrack.id
                })
                if (playlist[indexCurrentTrack + 1]) {
                    state.activeTrack = playlist[indexCurrentTrack + 1]
                }
            },
        playPrevTrack(state) {
             const playlist = state.isShuffled
                 ? state.shuffledTracks
                 : state.tracks  
              const indexCurrentTrack = playlist.findIndex((track) => {
                   return track.id === state.activeTrack.id
               })
               if (indexCurrentTrack > 0) {
                    state.activeTrack = playlist[indexCurrentTrack - 1]
                }
        },
    },
})

export const {
    setTracks,
    setActiveTrack,
    setIsShuffled,
    playNextTrack,
    playPrevTrack,
} = trackSlice.actions

export const trackReducer = trackSlice.reducer
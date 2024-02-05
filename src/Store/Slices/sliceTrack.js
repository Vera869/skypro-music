import { createSlice } from '@reduxjs/toolkit'

const trackSlice = createSlice({
  name: 'tracks',
  initialState: {
    activeTrack: {},
    tracks: [],
    playlists: [],
    shuffledTracks: [],
    currentPlaylist: [],
    filteredTracks: [],
    isShuffled: false,
    categoryId: null,
    isPlay: false, 
    isAuthorisation: [],
  },
  reducers: {
    setTracks(state, action) {
      state.tracks = action.payload.tracks
    },
    setShuffledTracks(state) {
      state.shuffledTracks = state.tracks.sort(
        () => Math.random() - 0.5
      )
    },
    setCurrentPlaylist(state) {
      state.currentPlaylist = state.tracks
    },
    setIsPlay(state) {
      state.isPlay = !state.isPlay
    },
    setActiveTrack(state, action) {
      state.activeTrack = action.payload.track
    },
   
    setPlaylists(state, action) {
      state.playlists = action.payload.track
    },
    setIsShuffled(state) {
      state.isShuffled = !state.isShuffled

      if (state.isShuffled) {
        state.shuffledTracks.sort(() => Math.random() - 0.5)
      }
    },
    playNextTrack(state) {
      const playlist = state.isShuffled ? state.shuffledTracks : state.tracks

      const indexCurrentTrack = playlist.findIndex((track) => {
        return track.id === state.activeTrack.id
      })
      if (playlist[indexCurrentTrack + 1]) {
        state.activeTrack = playlist[indexCurrentTrack + 1]
      }
    },
    playPrevTrack(state) {
      const playlist = state.isShuffled ? state.shuffledTracks : state.tracks

      const indexCurrentTrack = playlist.findIndex((track) => {
        return track.id === state.activeTrack.id
      })
      if (indexCurrentTrack > 0) {
        state.activeTrack = playlist[indexCurrentTrack - 1]
      }
    },
    setFilteredTracks(state, action) {
      state.filteredTracks = action.payload.filteredTracks
  },
  setCategoryId(state, action) {
    state.categoryId = action.payload.categoryId
},
  },
})

export const {
  playNextTrack,
  playPrevTrack,
  setTracks,
  setActiveTrack,
  setIsShuffled,
  setShuffledTracks,
  setCurrentPlaylist,
  setFilteredTracks,
  setCategoryId,
  isPlay,
  setIsPlay,
  setPlaylists,
  setAuthorisation,
} = trackSlice.actions

export const trackReducer = trackSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const trackSlice = createSlice({
  name: 'tracks',
  initialState: {
    activeTrack: {},
    tracks: [],
    favPlaylist: [],
    favorite: [],
    playlist: '',
    shuffledTracks: [],
    filteredTracks: [],
    isShuffled: false,
    categoryId: null,
    isPlay: false,

    filteredTracks: [],
    tracksForFilter: [],
    filteredAuthorGenreYears: [],
    isFiltred: false,
    $isAuthorClick: false,
    $isGenreClick: false,
    $isYearsClick: false,
    countYears: 0,
    filters: {
      genre: [],
      author: [],
      years: 'По умолчанию',
      search: '',
    },
  },
  reducers: {
    setTracks(state, action) {
      state.tracks = action.payload.tracks
    },
    clearTheFilter: (state) => {
      state.filters = {
        genre: [],
        author: [],
        years: 'По умолчанию',
        search: '',
      }

      state.countYears = 0
      state.isFiltred = false
    },
    selectedFiltered: (state, action) => {
      const author = [...state.filteredAuthorGenreYears, action.payload]
      state.filteredAuthorGenreYears = author
    },
    setFilters: (state, action) => {
      if (
        !state.filters.genre.length > 0 &&
        !state.filters.author.length > 0 &&
        !state.filters.years &&
        !state.filters.search
      ) {
        state.isFiltred = false
        return
      }
      if (
        action.payload.nameFilter !== 'years' &&
        action.payload.nameFilter !== 'search'
      ) {
        if (
          state.filters[action.payload.nameFilter].includes(
            action.payload.valueFilter
          )
        ) {
          state.filters[action.payload.nameFilter] = state.filters[
            action.payload.nameFilter
          ].filter((elem) => elem !== action.payload.valueFilter)
        } else {
          state.filters[action.payload.nameFilter].push(
            action.payload.valueFilter
          )
        }
      } else {
        state.filters[action.payload.nameFilter] = action.payload.valueFilter
      }

      state.filteredTracks = state.tracksForFilter

      console.log(state.filters[action.payload.nameFilter])

      state.isFiltred = true
      if (state.filters.years) {
        state.$isYearsClick = true
        if (state.filters.years === 'Сначала старые') {
          state.countYears = state.countYears = 1
          state.filteredTracks = [...state.filteredTracks].sort(
            (a, b) => new Date(a.release_date) - new Date(b.release_date)
          )
        }
        if (state.filters.years === 'Сначала новые') {
          state.countYears = state.countYears = 1
          state.filteredTracks = [...state.filteredTracks].sort(
            (a, b) => new Date(b.release_date) - new Date(a.release_date)
          )
        }
        if (state.filters.years === 'По умолчанию') {
          state.countYears = state.countYears = 0
          state.filteredTracks = state.tracksForFilter
        }
      }

      if (state.filters.genre.length > 0) {
        state.$isGenreClick = true
        state.filteredTracks = state.filters.genre
          .map((elemFilter) => {
            return state.filteredTracks.filter(
              (elem) => elem.genre === elemFilter
            )
          })
          .flat()
      }

      if (state.filters.author.length > 0) {
        state.$isAuthorClick = true
        state.filteredTracks = state.filters.author
          .map((authorItem) => {
            return state.filteredTracks.filter(
              (elem) => elem.author === authorItem
            )
          })
          .flat()
        console.log(state.filteredTracks)
      }

      if (state.filters.search) {
        state.filteredTracks = state.filteredTracks.filter((track) => {
          return (
            track.name
              .toLowerCase()
              .includes(state.filters.search.toLowerCase()) ||
            track.author
              .toLowerCase()
              .includes(state.filters.search.toLowerCase())
          )
        })
      }
    },

    setShuffledTracks(state) {
      state.shuffledTracks = state.tracks.sort(() => Math.random() - 0.5)
    },
    setIsShuffled(state) {
      state.isShuffled = !state.isShuffled

      if (state.isShuffled) {
        state.shuffledTracks.sort(() => Math.random() - 0.5)
      } else {
        state.shuffledTracks = state.tracks
      }
    },
    setIsPlay(state) {
      state.isPlay = !state.isPlay
    },
    setActiveTrack(state, action) {
      state.activeTrack = action.payload.track
    },
    setTracks(state, action) {
      state.tracks = action.payload.tracks
    },
    setFavorite(state, action) {
      state.favorite = action.payload.track
    },
    setFavPlaylist(state, action) {
      state.favPlaylist = action.payload
    },
    setPlaylist(state, action) {
      state.playlist = action.payload
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
    setTrackListForFilter: (state, action) => {
      state.tracksForFilter = action.payload
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
  setFavorite,
  setPlaylist,
  setFavPlaylist,

  setFilters,
  setTrackListForFilter,
  clearTheFilter,
  selectedFiltered,
  setTrackListFavoriteFilter,
} = trackSlice.actions

export const trackReducer = trackSlice.reducer

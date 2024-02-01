import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const musicApi = createApi({
   reducerPath: "musicApi",
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/',
   }),
   endpoints: (builder) => ({
      getAllTracks: builder.query ({
         query: () => ({url: `track/all/`})
      }),
      getFavTracks: builder.query ({
         query: () => ({
            url: `track/favorite/all/`,
            headers: {Authorisation: ''},
      })
      }),
      addFavTrack: builder.mutation ({
         query: (id) => ({
            url: `track/${id}/favorite/`,
            headers: {Authorisation: ''},
            method: 'POST'
         })
      }),
      deleteFavTrack: builder.mutation ({
         query: (id) => ({
            url: `track/${id}/favorite/`,
            headers: {Authorisation: ''},
            method: 'DELETE'
         })
      }),
   })
})

export const { useGetAllTracksQuery, useGetFavTracksQuery, useAddFavTrackMutation, useDeleteFavTrackMutation } = musicApi
export default musicApi.reducer
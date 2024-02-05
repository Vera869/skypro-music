import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const token = localStorage.accessToken
// console.log(token)

export const musicTracksApi = createApi({
  reducerPath: 'musicApi',
  tagTypes: ['tracks'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => ({ url: `/catalog/track/all/` }),
      providesTags: ['tracks'],
    }),
    getFavTracks: builder.query({
      query: ({ token }) => ({
        url: '/catalog/track/favorite/all/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['tracks'],
    }),
    addFavTrack: builder.mutation({
      query: ({ id, token }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['tracks'],
    }),
    deleteFavTrack: builder.mutation({
      query: ({ id, token }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['tracks'],
    }),
    getCatalogSelection: builder.query({
      query: () => ({
        url: `/catalog/selection/`,
        method: 'GET',
      }),
      providesTags: ['tracks'],
    }),
    getCatalogById: builder.query({
      query: ({ id }) => ({
        url: `/catalog/selection/${id}/`,
        method: 'GET',
      }),
      providesTags: ['tracks'],
    }),
    getTrackById: builder.query({
      query: ({ id }) => ({
        url: `/catalog/track/${id}`,
        method: 'GET',
      }),
    }),
  }),
})

export const {
  useGetAllTracksQuery,
  useGetFavTracksQuery,
  useAddFavTrackMutation,
  useDeleteFavTrackMutation,
  useGetTrackByIdQuery,
  useGetCatalogSelectionQuery,
  useGetCatalogByIdQuery,
} = musicTracksApi

export default musicTracksApi.reducer


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const musicTracksApi = createApi({
  reducerPath: 'musicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => ({ url: `/catalog/track/all/` }),
    }),
    getFavTracks: builder.query({
      query: ({ token }) => ({
        url: '/catalog/track/favorite/all/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    addFavTrack: builder.mutation({
      query: ({ id, token }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [{ type: 'Favorites', id: 'LIST' }],
    }),
    deleteFavTrack: builder.mutation({
      query: ({ id, token }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [{ type: 'Favorites', id: 'LIST' }],
    }),
    getCatalogSelection: builder.query({
      query: () => ({
        url: `/catalog/selection/`,
        method: 'GET',
      }),
    }),
    getCatalogById: builder.query({
      query: ({ id }) => ({
        url: `/catalog/selection/${id}/`,
        method: 'GET',
      }),
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


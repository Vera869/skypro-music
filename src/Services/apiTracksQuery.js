import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAccess } from '../Store/Slices/authorization'

const baseQueryRefresh = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authorisation.access
      if (token) {
        headers.set('authorisation', `Bearer ${token}`)
      }
      return headers
    },
  })

  const forceLogout = () => {
    window.location.href = '/login'
  }

  const authentication =
    api.getState().authorization ?? JSON.stringify(localStorage.getItem('refreshToken'))
  if (!authentication.refresh) {
    return forceLogout()
  }

  const retryResult = await baseQuery(args, api, extraOptions)

  if (retryResult?.error?.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: '/user/token/refresh/',
        method: 'POST',
        body: {
          refresh: JSON.stringify(localStorage.getItem('refreshToken')),
        },
      },
      api,
      extraOptions
    )

    if (!refreshResult.data.access) {
      return forceLogout()
    }

    api.dispatch(
      setAccess( refreshResult.data.access )
    )

    //Повторный запрос с обновлённым токеном
    const retryResult = await baseQuery(args, api, extraOptions)
    return retryResult
  }

  return retryResult
}

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
      }),
      providesTags: ['tracks'],
    }),
    addFavTrack: builder.mutation({
      query: ({ id, token }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: ['tracks'],
    }),
    deleteFavTrack: builder.mutation({
      query: ({ id, token }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'DELETE',
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

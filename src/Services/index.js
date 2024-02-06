import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAccess } from '../Store/Slices/authorization'

const baseQueryRefresh = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authorization.access
      console.log(token);
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  })

  const forceLogout = () => {
    window.location.href = '/login'
  }

  const authentication =
    api.getState().authorization ??
    JSON.stringify(localStorage.getItem('refreshToken'))
  if (!authentication.refresh) {
    return forceLogout()
  }

  const retryResult = await baseQuery(args, api, extraOptions)
  console.log(retryResult.response);

  if (retryResult?.error?.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: '/user/token/refresh/',
        method: 'POST',
        body: JSON.stringify({
          refresh: localStorage.getItem('refreshToken'),
        }),
        // headers: {
        //   "content-type": "application/json",
        // },
      },
      api,
      extraOptions
    )
    console.log(refreshResult.response);
    if (!refreshResult.data.access) {
      return forceLogout()
    }

    api.dispatch(setAccess(refreshResult.data.access))

    //Повторный запрос с обновлённым токеном
    const retryResult = await baseQuery(args, api, extraOptions)
    return retryResult
  }

  return retryResult
}

export const musicTracksApi = createApi({
  reducerPath: 'musicApi',
  tagTypes: ['tracks'],
  baseQuery: baseQueryRefresh,
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => ({ url: `/catalog/track/all/` }),
      providesTags: ['tracks'],
    }),
    getFavTracks: builder.query({
      query: () => ({
        url: '/catalog/track/favorite/all/',
      }),
      providesTags: ['tracks'],
    }),
    addFavTrack: builder.mutation({
      query: ({ id }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: ['tracks'],
    }),
    deleteFavTrack: builder.mutation({
      query: ({ id }) => ({
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
      providesTags: ['tracks'],
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

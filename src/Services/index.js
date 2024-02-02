import {createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react'

export const getFavTracksApi = createApi({
  reducerPath: "getFavTracksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech/",
  }),
  endpoints: (builder) => ({
    getFavTracks: builder.query({
      query: ({ token }) => ({
        url: "/catalog/track/favorite/all/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    addFavTrack: builder.mutation({
      query: ({ id, token }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [{ type: "Favorites", id: "LIST" }],
    }),
    deleteFavTrack: builder.mutation({
      query: ({ id, token }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [{ type: "Favorites", id: "LIST" }],
    }),
  }),
});

export const {
  useGetFavTracksQuery,
  useAddFavTrackMutation,
  useDeleteFavTrackMutation,
} = getFavTracksApi;

// setupListeners(store.dispatch)



// export const musicApi = createApi({
//    reducerPath: "musicApi",
//    baseQuery: fetchBaseQuery({
//       baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/',
//    }),
//    endpoints: (builder) => ({
//       getAllTracks: builder.query ({
//          query: () => ({url: `track/all/`})
//       }),
//       getFavTracks: builder.query ({
//          query: () => ({
//             url: `track/favorite/all/`,
//             headers: {Authorisation: ''},
//       })
//       }),
//       addFavTrack: builder.mutation ({
//          query: (id) => ({
//             url: `track/${id}/favorite/`,
//             headers: {Authorisation: ''},
//             method: 'POST'
//          })
//       }),
//       deleteFavTrack: builder.mutation ({
//          query: (id) => ({
//             url: `track/${id}/favorite/`,
//             headers: {Authorisation: ''},
//             method: 'DELETE'
//          })
//       }),
//    })
// })

// export const { useGetAllTracksQuery, useGetFavTracksQuery, useAddFavTrackMutation, useDeleteFavTrackMutation } = musicApi
// export default musicApi.reducer

import * as S from '../../components/TrackList/StyledTrackList.js'
import { SkeletonTracks } from '../../components/TrackList/SkeletonTracks.jsx'
import { GetTracks } from '../../components/TrackList/TrackList.jsx'
import { setActiveTrack } from '../../Store/Slices/sliceTrack.js'
import { useGetAllTracksQuery } from '../../Services/index.js'
// import { useDispatch, useSelector } from 'react-redux'
// import { setTracks } from '../../Store/Slices/sliceTrack.js'
// import { getFavTracks, refreshToken } from '../../Api.jsx'
// import { useEffect } from 'react'

export const Favorites = (
) => {
  const { data: tracks, isLoading } = useGetAllTracksQuery()
  //   const dispatch = useDispatch()
  //   const tracks = useSelector((state) => state.tracks.tracks)

  //   useEffect(() => {
  //     setPlaylist = 'fav'
  //     async function getTracks() {
  //         let tracksResponse = await getFavTracks()

  //         if (tracksResponse.status === 401) {
  //             const tokensResponse = await refreshToken()
  //             const tokens = await tokensResponse.json()
  //             localStorage.setItem('accessToken', tokens.access)
  //             tracksResponse = await getFavTracks()
  //         }

  //         const tracks = await tracksResponse.json()
  //         dispatch(setTracks({ tracks }))
  //         setErrorGetTracks('')
  //         setIsLoading(false)
  //     }
  //     getTracks()
  // }, [setErrorGetTracks, dispatch, setIsLoading, setPlaylist])

  return (
    <>
      <S.MainCenterBlock>
        <S.CenterBlockSearch>
          <S.SearchSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
          </S.SearchSvg>
          <S.SearchText type="search" placeholder="Поиск" name="search" />
        </S.CenterBlockSearch>
        <S.CenterBlockH2>Мой плейлист</S.CenterBlockH2>
        <S.ContentTitle>
          <S.PlaylistTitleC0l01>Трек</S.PlaylistTitleC0l01>
          <S.PlaylistTitleC0l02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleC0l02>
          <S.PlaylistTitleC0l03>АЛЬБОМ</S.PlaylistTitleC0l03>
          <S.PlaylistTitleC0l04>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.PlaylistTitleC0l04>
        </S.ContentTitle>
        {isLoading ? (
          <S.ContentPlaylist>
            <SkeletonTracks />
          </S.ContentPlaylist>
        ) : (
          <GetTracks
            tracks={tracks}
            // setActiveTrack={setActiveTrack}
          />
        )}
      </S.MainCenterBlock>
    </>
  )
}

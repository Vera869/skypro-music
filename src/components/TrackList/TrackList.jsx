import * as S from '../TrackList/StyledTrackList.js'

import { useDispatch, useSelector } from 'react-redux'
import { setActiveTrack } from '../../Store/Slices/sliceTrack.js'

export const GetTracks = ({ setVisiblePlayer, isplay, setIsPlay }) => {
  const tracks = useSelector((state) => state.tracks.tracks)
  const activeTrack = useSelector((state) => state.tracks.activeTrack)
  const dispatch = useDispatch()

  const clickTrack = ({ track }) => {
    setVisiblePlayer(true)
    dispatch(setActiveTrack({ track }))
    setIsPlay(true)

  //   async function handleLike(id) {
  //     let response = await setLike(id)

  //     if (response.status === 401) {
  //         const tokensResponse = await refreshToken()
  //         const tokens = await tokensResponse.json()
  //         localStorage.setItem('accessToken', tokens.access)
  //         response = await setLike(id)
  //     } else if (response.status !== 200) {
  //         console.log('Произошла ошибка')
  //     }

  //     if (playlist === 'fav') {
  //         const tracksResponse = await getFavTracks()
  //         const tracks = await tracksResponse.json()
  //         dispatch(setTracks({ tracks }))
  //         setLoadingTracksError('')
  //         setIsLoading(false)
  //     } else if (playlist === 'main') {
  //         const tracks = await getAllTracks()
  //         dispatch(setTracks({ tracks }))
  //         setLoadingTracksError('')
  //         setIsLoading(false)
  //     } else {
  //         const tracks = await getPlaylist(categoryId)
  //         dispatch(setTracks({ tracks }))
  //         setLoadingTracksError('')
  //         setIsLoading(false)
  //     }
  // }

  // async function handleRemoveLike(id) {
  //     let response = await removeLike(id)

  //     if (response.status === 401) {
  //         const tokensResponse = await refreshToken()
  //         const tokens = await tokensResponse.json()
  //         localStorage.setItem('accessToken', tokens.access)
  //         response = await removeLike(id)
  //     } else if (response.status !== 200) {
  //         console.log('Произошла ошибка')
  //     }

  //     if (playlist === 'fav') {
  //         const tracksResponse = await getFavTracks()
  //         const tracks = await tracksResponse.json()
  //         dispatch(setTracks({ tracks }))
  //         setLoadingTracksError('')
  //         setIsLoading(false)
  //     } else if (playlist === 'main') {
  //         const tracks = await getAllTracks()
  //         dispatch(setTracks({ tracks }))
  //         setLoadingTracksError('')
  //         setIsLoading(false)
  //     } else {
  //         const tracks = await getPlaylist(categoryId)
  //         dispatch(setTracks({ tracks }))
  //         setLoadingTracksError('')
  //         setIsLoading(false)
  //     }
  // }

  // const handleLikeClick = (id) => {
  //     isLiked ? handleRemoveLike(id) : handleLike(id)
  // }

    return
  }
  const trackItems = tracks.map((track) => (
    <S.PlaylistItem key={track.id}>
      <S.PlaylistTreck>
        <S.TreckTitle>
          <S.TreckTitleImage>
            {activeTrack.id === track.id ? (
              <S.TreckTitleImageActive>
                {isplay ? <S.ActiveTrack /> : ''}
              </S.TreckTitleImageActive>
            ) : (
              <S.TreckTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TreckTitleSvg>
            )}
          </S.TreckTitleImage>
          <S.TreckTitleText>
            <S.TreckTitleLink
              onClick={() => {
                clickTrack({ track })
              }}
              to="#"
            >
              {track.name}
            </S.TreckTitleLink>
          </S.TreckTitleText>
          <S.TreckAuthor>
            <S.TreckAuthorLink to="/AuthorList">
              {track.author}
            </S.TreckAuthorLink>
          </S.TreckAuthor>
          <S.TreckAlbum>
            <S.TreckAlbumLink>{track.album}</S.TreckAlbumLink>
          </S.TreckAlbum>
          <div>
            <S.TreckTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </S.TreckTimeSvg>
            <S.TreckTimeText>
              {(Number(track.duration_in_seconds) / 60).toFixed(2)}
            </S.TreckTimeText>
          </div>
        </S.TreckTitle>
      </S.PlaylistTreck>
    </S.PlaylistItem>
  ))
  return trackItems
}


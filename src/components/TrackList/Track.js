import * as S from '../TrackList/StyledTrackList.js'

import { useDispatch, useSelector } from 'react-redux'
import { setActiveTrack, setIsPlay, setFavorite } from '../../Store/Slices/sliceTrack.js'
import {
  useAddFavTrackMutation,
  useDeleteFavTrackMutation,
} from '../../Services/index.js'
import {  useState } from 'react'

export const GetTracks = ({ tracks }) => {
  const dispatch = useDispatch()
  const isPlay = useSelector((state) => state.tracks.isPlay)
  const activeTrack = useSelector((state) => state.tracks.activeTrack)

  const [addLike] = useAddFavTrackMutation()
  const [disLike] = useDeleteFavTrackMutation()

  const userId = Number(localStorage.getItem('user'))
  const user = localStorage.getItem('user')
  
  const [isFavourite, setIsFavourite] = useState(false)
 
  const favClick = ({ track }) => {
    const id = track.id
    const staredUser = track.stared_user

   
    if (isFavourite) {
      disLike({id})
      setFavorite(false)
      console.log("dislike");
    } else {
      addLike({id})
      setIsFavourite(true)
      // dispatch(setFavorite({id: track.id, track: track }))
      // dispatch(setFavorite(staredUser.some((user) => user.id === userId)))
      console.log("like");
    }
    }
  // useEffect(({ track }) => {
  //   setFavorite(staredUser.some((user) => user.id === userId))
  // }, [track])


  const clickTrack = ({ track }) => {
    dispatch(setActiveTrack({ track }))
    if (isPlay == false) {
      dispatch(setIsPlay())
    }
    dispatch(setIsPlay())
    return
  }
  const trackItems = tracks.map((track) => (
    <S.PlaylistItem key={track.id}>
      <S.PlaylistTreck>
        <S.TreckTitle>
          <S.TreckTitleImage>
            {activeTrack.id === track.id ? (
              <S.TreckTitleImageActive>
                {isPlay ? <S.ActiveTrack /> : ''}
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
            <S.TreckTimeSvg
              alt="time"
              onClick={() => {
                favClick({ track })
              }}
             //  track.stared_user.found((user) => user.id === userId) || track.stared_user.some((user) => user.id === userId)
            >{isFavourite ?  <use xlinkHref="img/icon/sprite.svg#icon-like" fill='violet' /> : 
              <use xlinkHref="img/icon/sprite.svg#icon-like" />}
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

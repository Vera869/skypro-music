import * as S from '../TrackList/StyledTrackList.js'

import { useDispatch, useSelector } from 'react-redux'
import { setActiveTrack, setIsPlay } from '../../Store/Slices/sliceTrack.js'
import {
  useAddFavTrackMutation,
  useDeleteFavTrackMutation,
} from '../../Services/index.js'
import { useEffect, useState } from 'react'

export const GetTracks = ({ tracks }) => {
  const dispatch = useDispatch()
  const isPlay = useSelector((state) => state.tracks.isPlay)
  const activeTrack = useSelector((state) => state.tracks.activeTrack)

  // const [addLike] = useAddFavTrackMutation()
  // const [dislike] = useDeleteFavTrackMutation()

  // const userId = Number(localStorage.getItem('user'))
  // const [isFavourite, setFavourite] = useState(false)

  // const favClick = ({ track }) => {
  //   const { id: trackID, stared_user } = track
  //   if (isFavourite) {
  //     dislike(trackID)
  //   } else {
  //     addLike(trackID)
  //   }
  // }
  // useEffect((track) => {
  //   setFavourite(stared_user.some((user) => user.id === userId))
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
              // onClick={() => {
              //   favClick({ track })
              // }}
              // fill={isFavourite ? 'violet' : 'gray'}
            >
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

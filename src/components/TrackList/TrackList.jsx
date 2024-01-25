import { SkeletonTracks } from './SkeletonTracks.jsx'
import * as S from '../TrackList/StyledTrackList.js'
import {  useContext } from 'react'
import { TrakPlayContext } from '../../Context/tracks.js'

import { useDispatch, useSelector } from 'react-redux'
import { setActiveTrack } from '../../Store/Slices/sliceTrack.js'

function GetTracks({ isLoading, errorGetTracks, setVisiblePlayer }) {
  let { trakPlayContext } = useContext(TrakPlayContext)


  const tracks = useSelector((state) => state.tracks.tracks)
  const activeTrack = useSelector((state) => state.tracks.activeTrack)
  // const activeTrackId = activeTrack.id
  const dispatch = useDispatch()

  const toggleErrorContext = () => {
    if (errorGetTracks)
      return (
        <S.ContentPlaylist>
          <S.ErrorMassege>
            К сожалению, при загрузке плэйлиста произошла ошибка, пожалуйста,
            попробуйте позже.
          </S.ErrorMassege>
        </S.ContentPlaylist>
      )
    return isLoading ? (
      <S.ContentPlaylist>
        <SkeletonTracks />
      </S.ContentPlaylist>
    ) : (
      <S.ContentPlaylist>{trackItems}</S.ContentPlaylist>
    )
  }

  const clickTrack = ({ track }) => {
    setVisiblePlayer(true)
    dispatch(setActiveTrack({ track }))
    return
  }
  const trackItems = tracks.map((track) => (
    <S.PlaylistItem key={track.id}>
      <S.PlaylistTreck>
        <S.TreckTitle>
        <S.TreckTitleImage>
        {activeTrack.id === track.id ? (
                <S.TreckTitleImageActive>
                {trakPlayContext ? <S.ActiveTrack /> : ''}
                </S.TreckTitleImageActive>
                
              )
         
               : (
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
              {/* {track.remix ? (
                <S.TreckTitleSpan>({track.remix})</S.TreckTitleSpan>
              ) : (
                ''
              )} */}
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
  return toggleErrorContext()
}
export default GetTracks

import * as S from '../TrackList/StyledTrackList.js'

import { useDispatch, useSelector } from 'react-redux'
import { setActiveTrack, setCurrentPlaylist, setIsPlay} from '../../Store/Slices/sliceTrack.js'
import {
  useAddFavTrackMutation,
  useDeleteFavTrackMutation,
} from '../../Services/index.js'
import {  useState } from 'react'
import { useEffect } from 'react'



export const GetTracks = ({ track, currentPlaylist } ) => {
  const [isLike, setIsLike] = useState(false)

  const dispatch = useDispatch()
  const isPlay = useSelector((state) => state.tracks.isPlay)
  const activeTrack = useSelector((state) => state.tracks.activeTrack)
  const playlist = useSelector((state) => state.tracks.playlist)
  
  const [addLike] = useAddFavTrackMutation()
  const [disLike] = useDeleteFavTrackMutation()

  const user = JSON.parse(localStorage.getItem('user'))
  const userId = user.id
  
  const id = track.id
  const staredUser = track.stared_user
  
  const favClick = () => {
   
    if (isLike) {
      disLike({id})
      setIsLike(false)
      console.log("dislike");
    } else {
      addLike({id})
      setIsLike(true)
      console.log("like");

    }
    }
  useEffect(() => {
    if(playlist !== 'fav') {
      setIsLike(Boolean(staredUser.find((id) => id.id === userId)))
    } else {
      setIsLike(true)
    }
    
 }, [track])

  const clickTrack = ({ track }) => {
    dispatch(setActiveTrack({ track }))
    dispatch(setCurrentPlaylist(currentPlaylist))
    if (isPlay == false) {
      dispatch(setIsPlay())
    }
    dispatch(setIsPlay())
    return
  }
  
  return(<>
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
            >{isLike ?  <use xlinkHref="img/icon/sprite.svg#icon-like" fill='violet' /> : 
              <use xlinkHref="img/icon/sprite.svg#icon-like" />}
            </S.TreckTimeSvg>
            <S.TreckTimeText>
              {(Number(track.duration_in_seconds) / 60).toFixed(2)}
            </S.TreckTimeText>
          </div>
        </S.TreckTitle>
      </S.PlaylistTreck>
    </S.PlaylistItem>
    </>)
}

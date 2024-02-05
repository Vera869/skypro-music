import * as S from '../TrackList/StyledTrackList.js'

import { useDispatch, useSelector } from 'react-redux'
import { setActiveTrack, setIsPlay } from '../../Store/Slices/sliceTrack.js'

export const GetTracks = ({ tracks }) => {
  const dispatch = useDispatch()
  const isPlay = useSelector((state) => state.tracks.isPlay)
  const activeTrack = useSelector((state) => state.tracks.activeTrack)
  //const { data, isLoading, isError } = useGetFavTracksQuery()
  //const staredUser = data.stared_user
  // const favTrack = { id: trackID, staredUser}

  // const [addLike] = useAddFavTrackMutation();
  // const [dislike] = useDeleteFavTrackMutation();
 
  // const userId = Number(localStorage.getItem('user'));
  // const [isFavourite, setFavourite] = useState(false)

  // useEffect(() => {
  //     setFavourite(staredUser.some((user) => user.id === userId))
  //   }, [favTrack])

  //   const handleFavorite = () => {
  //     if (isFavourite) dislike(trackID)
  //     else addLike(trackID)
  //   }
    
  

  const clickTrack = ({ track }) => {
    dispatch(setActiveTrack({ track }))
    if(isPlay == false) {
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
            <S.TreckTimeSvg alt="time" 
            // onClick={handleFavorite()}
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

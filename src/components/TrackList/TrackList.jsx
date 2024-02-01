import { SkeletonTracks } from './SkeletonTracks.jsx'
import * as S from '../TrackList/StyledTrackList.js'
// import {useGetAllTracksQuery} from '../../Services/index.js'

import { useDispatch, useSelector } from 'react-redux'
import { setActiveTrack } from '../../Store/Slices/sliceTrack.js'
import FilterBy from '../FilterBy/FilterBy.jsx'

export const GetTracks = ({ isLoading, errorGetTracks, setVisiblePlayer, isplay, setIsPlay }) => {
  // const {data, error, isLoading} = useGetAllTracksQuery()
  const tracks = useSelector((state) => state.tracks.tracks)
  const activeTrack = useSelector((state) => state.tracks.activeTrack)
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
    return <>
    
     <S.CenterBlockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterBlockSearch>
       <S.CenterBlockH2>Треки</S.CenterBlockH2>
   <S.CenterBlockFilter>
     <S.CenterBlockFilterTitle>Искать по:</S.CenterBlockFilterTitle>
     <FilterBy />
   </S.CenterBlockFilter>
   <S.CenterBlockContent>
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
    { isLoading ? (
      <S.ContentPlaylist>
        <SkeletonTracks />
      </S.ContentPlaylist>
    ) : (
      <S.ContentPlaylist>{trackItems}</S.ContentPlaylist>)}
      </S.CenterBlockContent>
     
      </>
    
  }
  const clickTrack = ({ track }) => {
    setVisiblePlayer(true)
    dispatch(setActiveTrack({ track }))
    setIsPlay(true)
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
  return toggleErrorContext()
}


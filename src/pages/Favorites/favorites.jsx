import * as S from '../../components/TrackList/StyledTrackList.js'
import { SkeletonTracks } from '../../components/TrackList/SkeletonTracks.jsx'
import { GetTracks } from '../../components/TrackList/TrackList.jsx'
import { useGetFavTracksQuery } from '../../Services/index.js'
import { useDispatch, useSelector } from 'react-redux'
import { clearTheFilter, setFavPlaylist, setPlaylist, setTrackListFavoriteFilter } from '../../Store/Slices/sliceTrack.js'
import { useEffect } from 'react'
import SearchBlock from '../../components/FilterBy/SearchFiltered.jsx'

export const Favorites = () => {
  const { data: favTracks, isLoading, isError } = useGetFavTracksQuery()
  
  const favoriteTracksFiltered = useSelector(
    (state) => state.tracks.filtredFavoriteTracks
  )
  const initialFavoriteTracks = useSelector((state) => state.tracks.tracksFavoriteForFilter)
  const isFiltredFavorite = useSelector((state) => state.tracks.isFiltred)

  let favoriteData = isFiltredFavorite
    ? favoriteTracksFiltered
    : initialFavoriteTracks

  const dispatch = useDispatch()
  dispatch(setPlaylist('fav'))
  useEffect(() => {
    dispatch(setFavPlaylist({ favTracks }))
    dispatch(setTrackListFavoriteFilter(favTracks || []))
    dispatch(clearTheFilter())
  }, [favTracks, dispatch])

  if (isError)
    return (
      <S.ContentPlaylist>
        <S.ErrorMassege>
          К сожалению, при загрузке плэйлиста произошла ошибка, <br></br>
          пожалуйста, попробуйте позже.
        </S.ErrorMassege>
      </S.ContentPlaylist>
    )
    if (favTracks?.length === 0)
    return (
      <S.ContentPlaylist>
        <S.ErrorMassege>
          У вас ещё нет избранных треков
        </S.ErrorMassege>
      </S.ContentPlaylist>
    )
  return (
    <>
      <S.MainCenterBlock>
        <SearchBlock />
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
        <S.ContentPlaylist>
          {isLoading ? (
            <SkeletonTracks />
          ) : 
          isFiltredFavorite ? (
            favoriteTracksFiltered.length === 0 ? (<S.ErrorMassege>Не найдено треков, удовлетворяющих вашим критериям</S.ErrorMassege>) : (
            favoriteTracksFiltered.map((track) => {
              return <GetTracks key={track.id} track={track} currentPlaylist={favoriteData}/>
            }))
          ) : (
            initialFavoriteTracks.map((track) => {
              return <GetTracks key={track.id} track={track} currentPlaylist={initialFavoriteTracks}/>
            })
          )}
        </S.ContentPlaylist>
      </S.MainCenterBlock>
    </>
  )
}

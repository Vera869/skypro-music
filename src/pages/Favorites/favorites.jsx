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
  // const valueSearch = useSelector((state) => state.tracks.search)
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
  return (
    <>
      <S.MainCenterBlock>
        <SearchBlock />
        {/* <S.CenterBlockSearch>
          <S.SearchSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
          </S.SearchSvg>
          <S.SearchText type="search" placeholder="Поиск" name="search" />
        </S.CenterBlockSearch> */}
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
          ) : // favTracks.map((track) => {
          //   return <GetTracks key={track.id} track={track} />
          // })
          favoriteData.length ? (
            favoriteData.map((track) => {
              return <GetTracks key={track.id} track={track} />
            })
          ) : (
            initialFavoriteTracks.map((track) => {
              return <GetTracks key={track.id} track={track} />
            })
          )}
        </S.ContentPlaylist>
      </S.MainCenterBlock>
    </>
  )
}

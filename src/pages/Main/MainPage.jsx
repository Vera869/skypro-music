import { SkeletonTracks } from '../../components/TrackList/SkeletonTracks.jsx'
import * as S from '../../components/TrackList/StyledTrackList.js'
import {
  clearTheFilter,
  setFilters,
  setPlaylist,
  setTrackListForFilter,
} from '../../Store/Slices/sliceTrack.js'
import FilterBy from '../../components/FilterBy/FilterBy.jsx'
import { GetTracks } from '../../components/TrackList/TrackList.jsx'
import { useGetAllTracksQuery } from '../../Services/index.js'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import SearchBlock from '../../components/FilterBy/SearchFiltered.jsx'

export const Main = ({}) => {
  const dispatch = useDispatch()
  dispatch(setPlaylist('all'))

  const { data, isLoading, isError } = useGetAllTracksQuery()
  console.log(data);

  const filtredData = useSelector((state) => state.tracks.filteredTracks)
  const initialTracks = useSelector((state) => state.tracks.tracksForFilter)
  const isFiltred = useSelector((state) => state.tracks.isFiltred)
  const valueSearch = useSelector((state) => state.tracks.search)

  let newFiltredData = isFiltred ? filtredData : initialTracks

  useEffect(() => {
    dispatch(clearTheFilter())
    dispatch(setTrackListForFilter(data || []))
    dispatch(setFilters({ nameFilter: 'search', valueFilter: valueSearch }))
  }, [dispatch, data, isLoading, valueSearch])

  if (isError && newFiltredData.length === 0)
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
        <S.CenterBlockH2>Треки</S.CenterBlockH2>
        <S.CenterBlockFilter>
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
          <S.ContentPlaylist>
            {isLoading ? (
              <SkeletonTracks />
            ) : newFiltredData.length ? (
              newFiltredData.map((track) => {
                return <GetTracks key={track.id} track={track} currentPlaylist={data}/>
              })
            ) : (
              initialTracks.map((track) => {
                return <GetTracks key={track.id} track={track} currentPlaylist={data}/>
              })
            )}
          </S.ContentPlaylist>
        </S.CenterBlockContent>
      </S.MainCenterBlock>
    </>
  )
}

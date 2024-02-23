import { SkeletonTracks } from '../../components/TrackList/SkeletonTracks.jsx'
import * as S from '../../components/TrackList/StyledTrackList.js'
import { setPlaylist, setTrackListForFilter, setTracks } from '../../Store/Slices/sliceTrack.js'
import {CenterblockFilter} from '../../components/FilterBy/BlockFilters.jsx'
import FilterBy from '../../components/FilterBy/FilterBy.jsx'
import { GetTracks } from '../../components/TrackList/TrackList.jsx'
import { useGetAllTracksQuery } from '../../Services/index.js'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export const Main = () => {
  const dispatch = useDispatch()
  dispatch(setPlaylist('all'))

  const { data: tracks, isloading, isError } = useGetAllTracksQuery()
  console.log(tracks);
 
  const filteredData = useSelector((state) => state.tracks.filteredTracks)
  const initialTracks = useSelector((state) => state.tracks.tracksForFilter)
  const isFiltered = useSelector((state) => state.tracks.isFiltered)
  const newFilteredData = isFiltered ? filteredData : initialTracks

  useEffect(() => {
    dispatch(setTracks({ tracks }))
    dispatch(setTrackListForFilter(tracks || []))
  }, [dispatch, tracks])
  // const { data: tracks, isLoading, isError } = useGetAllTracksQuery()
  // // console.log(tracks);
  // useEffect(() => {
  //   dispatch(setTracks({ tracks }))
  // }, [tracks])

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
        <S.CenterBlockSearch>
          <S.SearchSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
          </S.SearchSvg>
          <S.SearchText type="search" placeholder="Поиск" name="search" />
        </S.CenterBlockSearch>
        <S.CenterBlockH2>Треки</S.CenterBlockH2>
        <S.CenterBlockFilter>
          <S.CenterBlockFilterTitle>Искать по:</S.CenterBlockFilterTitle>
          <CenterblockFilter tracks={tracks} />
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
            ) : (
              tracks.map((track) => {
                return (
                  <GetTracks
                    key={track.id}
                    track={track}
                  />
                )
              })
            )}
          </S.ContentPlaylist>
        </S.CenterBlockContent>
      </S.MainCenterBlock>
    </>
  )
}

import { SkeletonTracks } from '../../components/TrackList/SkeletonTracks.jsx'
import * as S from '../../components/TrackList/StyledTrackList.js'
import { setPlaylist, setTracks } from '../../Store/Slices/sliceTrack.js'
import FilterBy from '../../components/FilterBy/FilterBy.jsx'
import { GetTracks } from '../../components/TrackList/TrackList.jsx'
import { useGetAllTracksQuery } from '../../Services/index.js'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export const Main = ({}) => {
  const dispatch = useDispatch()
  dispatch(setPlaylist('all'))

  const { data: tracks, isLoading, isError } = useGetAllTracksQuery()
  useEffect(() => {
    dispatch(setTracks({ tracks }))
  }, [tracks])

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

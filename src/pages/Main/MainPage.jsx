import { SkeletonTracks } from '../../components/TrackList/SkeletonTracks.jsx'
import * as S from '../../components/TrackList/StyledTrackList.js'
import { setActiveTrack } from '../../Store/Slices/sliceTrack.js'
import FilterBy from '../../components/FilterBy/FilterBy.jsx'
import { GetTracks } from '../../components/TrackList/TrackList.jsx'

export const Main = ({
  isplay,
  setIsPlay,
  isLoading,
  errorGetTracks,
  setVisiblePlayer,
  playlist,
  setPlaylist,
}) => {
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
            {isLoading ? (
              <S.ContentPlaylist>
                <SkeletonTracks />
              </S.ContentPlaylist>
            ) : (
              <S.ContentPlaylist>
                <GetTracks
                  isplay={isplay}
                  setVisiblePlayer={setVisiblePlayer}
                  setActiveTrack={setActiveTrack}
                  setIsPlay={setIsPlay}
                  playlist={playlist}
                  setPlaylist={setPlaylist}
                />
              </S.ContentPlaylist>
            )}
          </S.CenterBlockContent>
        </S.MainCenterBlock>
      </>
    )
  }
  return toggleErrorContext()
}

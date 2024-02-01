import * as S from '../../components/TrackList/StyledTrackList.js'
import { GetTracks } from '../../components/TrackList/TrackList.jsx'
import { setActiveTrack } from '../../Store/Slices/sliceTrack.js'

export const Favorites = (
  isplay,
  setIsPlay,
  setVisiblePlayer
) => {
  return (
    <>
      <S.MainCenterBlock>
        <S.CenterBlockSearch>
          <S.SearchSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
          </S.SearchSvg>
          <S.SearchText type="search" placeholder="Поиск" name="search" />
        </S.CenterBlockSearch>
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
        <GetTracks
          isplay={isplay}
          setVisiblePlayer={setVisiblePlayer}
          setActiveTrack={setActiveTrack}
          setIsPlay={setIsPlay}
        />
      </S.MainCenterBlock>
    </>
  )
}

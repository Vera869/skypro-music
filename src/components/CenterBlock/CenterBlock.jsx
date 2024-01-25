import GetTracks from '../TrackList/TrackList.jsx'
import FilterBy from '../FilterBy/FilterBy.jsx'
import * as S from '../CenterBlock/StyledCenterBlock.js'

function CenterBlock({
  isLoading,
  allTracks,
  errorGetTracks,
  setVisiblePlayer,
  isplay,
}) {
  return (
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
        <GetTracks
          isLoading={isLoading}
          allTracks={allTracks}
          errorGetTracks={errorGetTracks}
          setVisiblePlayer={setVisiblePlayer}
          isplay={isplay}
        />
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  )
}
export default CenterBlock

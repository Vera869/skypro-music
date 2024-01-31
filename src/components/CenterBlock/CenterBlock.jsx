// import GetTracks from '../TrackList/TrackList.jsx'
// import FilterBy from '../FilterBy/FilterBy.jsx'
import * as S from '../CenterBlock/StyledCenterBlock.js'
import {CenterBlockContent} from './CenterBlockContent.jsx'

function MineCenterBlock({
  isLoading,
  // allTracks,
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
      <CenterBlockContent isLoading={isLoading}
                errorGetTracks={errorGetTracks}
                setVisiblePlayer={setVisiblePlayer}
                isplay={isplay}/>
    </S.MainCenterBlock>
  )
}
export default MineCenterBlock

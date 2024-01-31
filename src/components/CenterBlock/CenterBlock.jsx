import * as S from '../CenterBlock/StyledCenterBlock.js'
import { CenterBlockContent } from './CenterBlockContent.jsx'

function MaineCenterBlock({
  allTracks,
  isLoading,
  errorGetTracks,
  setVisiblePlayer,
  isplay,
  setIsPlay,
}) {
  return (
    <S.MainCenterBlock>
      <S.CenterBlockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterBlockSearch>
      {/* <CenterBlockContent
        allTracks={allTracks}
        isLoading={isLoading}
        errorGetTracks={errorGetTracks}
        setVisiblePlayer={setVisiblePlayer}
        isplay={isplay}
        setIsPlay={setIsPlay}
      /> */}
    </S.MainCenterBlock>
  )
}
export default MaineCenterBlock

import { useParams } from 'react-router-dom'
import * as S from '../../components/TrackList/StyledTrackList.js'

export const PlayListCategory = ({ arrayCategorys }) => {
  const params = useParams()

  const arrayCategory = arrayCategorys.find(
    (arrayCategory) => arrayCategory.id === Number(params.id),
  )
  return (
    <><S.MainCenterBlock>
       <S.CenterBlockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterBlockSearch>
      {/* <img src={'/' + arrayCategory.src} alt={arrayCategory.alt} /> */}
      <S.CenterBlockH2>Плейлист {arrayCategory.alt}</S.CenterBlockH2>
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
     </S.MainCenterBlock>
    </>
  )
}


// import { useParams } from 'react-router-dom'

// export const PlayListCategory = ({ arrayCategorys }) => {
//   const params = useParams()

//   const arrayCategory = arrayCategorys.find(
//     (arrayCategory) => arrayCategory.id === Number(params.id),
//   )
//   return (
//     <div className="container new-page">
//       <img src={'/' + arrayCategory.src} alt={arrayCategory.alt} />
//       <h1>Плейлист {arrayCategory.alt}</h1>
//     </div>
//   )
// }

import { useParams } from 'react-router-dom'
import * as S from '../../components/TrackList/StyledTrackList.js'
import { SkeletonTracks } from '../../components/TrackList/SkeletonTracks.jsx'
import { GetTracks } from '../../components/TrackList/TrackList.jsx'
// import { arrayCategorys } from '../../components/SideBar/ArrayCategory.jsx'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useGetCatalogByIdQuery } from '../../Services/index.js'
import { useSelector } from 'react-redux'

export const PlayListCategory = (
  // {isLoading}
) => {
  // const arrayCategorys = useSelector((state) => state.tracks.playlists)
  // const { data: tracks, isLoading, isError } = useGetCatalogByIdQuery()
  // const arrayCategorys = data
 
  const params = useParams()
  const id = params.id
  const { data: arrayCategorys, isLoading, isError } = useGetCatalogByIdQuery({id})
  // const dispatch = useDispatch()
  // const arrayCategory = arrayCategorys.find(
  //   (arrayCategory) => arrayCategory.id === Number(params.id)
  // )
  console.log(arrayCategorys);
  
  if (isError)
  return (
   <>
        К сожалению, при загрузке плэйлиста произошла ошибка, <br></br>
        пожалуйста, попробуйте позже.
        </>
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
        <S.CenterBlockH2>Плейлист <br></br>
           {!isLoading && arrayCategorys.name}
          </S.CenterBlockH2>
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
          <GetTracks
            tracks={arrayCategorys.items}
          />
        )}
      </S.MainCenterBlock>
    </>
  )
}

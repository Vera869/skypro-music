import { useParams } from 'react-router-dom'
import * as S from '../../components/TrackList/StyledTrackList.js'
import { SkeletonTracks } from '../../components/TrackList/SkeletonTracks.jsx'
import { GetTracks } from '../../components/TrackList/TrackList.jsx'
import { useGetCatalogByIdQuery } from '../../Services/index.js'
import { useDispatch } from 'react-redux'
import { setPlaylist } from '../../Store/Slices/sliceTrack.js'

export const PlayListCategory = () => {
  const dispatch = useDispatch()
  dispatch(setPlaylist('categorys'))

  const params = useParams()
  const id = params.id
  const {
    data: arrayCategorys,
    isLoading,
    isError,
  } = useGetCatalogByIdQuery({ id })

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
        <S.CenterBlockH2>
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
        <S.ContentPlaylist>
            {isLoading ? (
              <SkeletonTracks />
            ) : (
              arrayCategorys.items.map((track) => {
                return (
                  <GetTracks
                    key={track.id}
                    track={track}
                  />
                )
              })
            )}
          </S.ContentPlaylist>
      </S.MainCenterBlock>
    </>
  )
}
//arrayCategorys.items
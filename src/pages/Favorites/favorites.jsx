import * as S from '../../components/TrackList/StyledTrackList.js'
import { SkeletonTracks } from '../../components/TrackList/SkeletonTracks.jsx'
import { GetTracks } from '../../components/TrackList/TrackList.jsx'
import { useGetFavTracksQuery } from '../../Services/index.js'
import { useDispatch } from 'react-redux'
import { setTracks } from '../../Store/Slices/sliceTrack.js'
import { useEffect } from 'react'

export const Favorites = (
) => {
  const { data: favTracks, isLoading, isError } = useGetFavTracksQuery()
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(setTracks({ favTracks }))
    }, [favTracks])
  console.log(favTracks);

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
        {isLoading ? (
          <S.ContentPlaylist>
            <SkeletonTracks />
          </S.ContentPlaylist>
        ) : (
          <GetTracks
            tracks={favTracks}
          />
        )}
      </S.MainCenterBlock>
    </>
  )
}

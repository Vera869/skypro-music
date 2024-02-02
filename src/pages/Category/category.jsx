import { useParams } from 'react-router-dom'
import * as S from '../../components/TrackList/StyledTrackList.js'
import { GetTracks } from '../../components/TrackList/TrackList.jsx'
import { setActiveTrack } from '../../Store/Slices/sliceTrack.js'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { arrayCategorys } from '../../components/SideBar/ArrayCategory.jsx'
import { setCategoryId, setTracks } from '../../Store/Slices/sliceTrack.js'
import { getPlaylist } from '../../Api.jsx'

export const PlayListCategory = (
  isplay,
  setIsPlay,
  setVisiblePlayer,
  playlist,
  setPlaylist,
  // errorGetTracks, 
  setErrorGetTracks,
  setIsLoading,
) => {
  const params = useParams()
  
  const dispatch = useDispatch()
  const arrayCategory = arrayCategorys.find(
    (arrayCategory) => arrayCategory.id === Number(params.id)
  )
  const categoryId = arrayCategory.id

  useEffect(() => {
    setPlaylist = 'category'
    dispatch(setCategoryId({ categoryId }))
    getPlaylist(categoryId)
        .then((tracks) => {
            dispatch(setTracks({ tracks }))
        })
        .then(() => {
           setErrorGetTracks = ''
           setIsLoading(false)
        })
        .catch((error) => {
            console.log(error)
        })
}, [dispatch, categoryId])
  return (
    <>
      <S.MainCenterBlock>
        <S.CenterBlockSearch>
          <S.SearchSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
          </S.SearchSvg>
          <S.SearchText type="search" placeholder="Поиск" name="search" />
        </S.CenterBlockSearch>
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
        <GetTracks
          isplay={isplay}
          setVisiblePlayer={setVisiblePlayer}
          setActiveTrack={setActiveTrack}
          setIsPlay={setIsPlay}
          playlist={playlist}
          setPlaylist={setPlaylist}
        />
      </S.MainCenterBlock>
    </>
  )
}

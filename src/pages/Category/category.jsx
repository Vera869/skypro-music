import { useParams } from 'react-router-dom'
import * as S from '../../components/TrackList/StyledTrackList.js'
import { SkeletonTracks } from '../../components/TrackList/SkeletonTracks.jsx'
import { GetTracks } from '../../components/TrackList/TrackList.jsx'
import { useGetCatalogByIdQuery } from '../../Services/index.js'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearTheFilter,
  setCategoryPlaylist,
  setCathegoryPlaylistFilter,
  setPlaylist,
} from '../../Store/Slices/sliceTrack.js'
import SearchBlock from '../../components/FilterBy/SearchFiltered.jsx'
import { useEffect } from 'react'

export const PlayListCategory = () => {
  const dispatch = useDispatch()

  dispatch(setPlaylist('categorys'))
  
  const params = useParams()
  const id = params.id
  const {
    data,
    isLoading,
    isError,
  } = useGetCatalogByIdQuery({ id })
  console.log(data.items);
  const cathegoryPlaylistFiltered = useSelector(
    (state) => state.tracks.filtredCathegoryPlaylist
  )
  const isFiltred = useSelector(
    (state) => state.tracks.isFiltred
  )
  useEffect(() => {
    dispatch(setCategoryPlaylist({data}))
    dispatch(setCathegoryPlaylistFilter(data.items || []))
    dispatch(clearTheFilter())
  }, [data, dispatch])    
 
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
        <SearchBlock />
        <S.CenterBlockH2>{!isLoading && data.name}</S.CenterBlockH2>
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
          ) : 
            // (arrayCategorys.items.map((track) => {
            //   return <GetTracks key={track.id} track={track} />
            // })

            (isFiltred ? (cathegoryPlaylistFiltered.map((track) => {
              return <GetTracks key={track.id} track={track} currentPlaylist={data.items}/>
            })) : (data.items.map((track) => {
                return <GetTracks key={track.id} track={track} currentPlaylist={data.items}/>
              })))
          }
        </S.ContentPlaylist>
      </S.MainCenterBlock>
    </>
  )
}

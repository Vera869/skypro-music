import * as S from '../../components/TrackList/StyledTrackList.js'

export const Favorites = () => {
  return ( <>
  <S.MainCenterBlock>
    <S.CenterBlockSearch>
     <S.SearchSvg>
       <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
     </S.SearchSvg>
     <S.SearchText type="search" placeholder="Поиск" name="search" />
   </S.CenterBlockSearch>
   {/* <img src={'/' + arrayCategory.src} alt={arrayCategory.alt} /> */}
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
  </S.MainCenterBlock>
 </>
    
    
  )
}


// import { SkeletonTracks } from '../../components/TrackList/SkeletonTracks.jsx'
// import * as S from '../../components/TrackList/StyledTrackList.js'

// import { useDispatch, useSelector } from 'react-redux'
// import { setActiveTrack } from '../../Store/Slices/sliceTrack.js'

// export const Favorites = ({ isLoading, errorGetTracks, setVisiblePlayer, isplay, setIsPlay }) => {
//   const tracks = useSelector((state) => state.tracks.tracks)
//   const activeTrack = useSelector((state) => state.tracks.activeTrack)
//   const dispatch = useDispatch()

//   const toggleErrorContext = () => {
//     if (errorGetTracks)
//       return (
//         <S.ContentPlaylist>
//           <S.ErrorMassege>
//             К сожалению, при загрузке плэйлиста произошла ошибка, пожалуйста,
//             попробуйте позже.
//           </S.ErrorMassege>
//         </S.ContentPlaylist>
//       )
//     return isLoading ? (
//       <S.ContentPlaylist>
//         <SkeletonTracks />
//       </S.ContentPlaylist>
//     ) : (<>
//       <S.CenterBlockSearch>
//          <S.SearchSvg>
//            <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
//          </S.SearchSvg>
//          <S.SearchText type="search" placeholder="Поиск" name="search" />
//        </S.CenterBlockSearch>
//         <S.CenterBlockH2>Мои треки</S.CenterBlockH2>
   
//     <S.CenterBlockContent>
//       <S.ContentTitle>
//         <S.PlaylistTitleC0l01>Трек</S.PlaylistTitleC0l01>
//         <S.PlaylistTitleC0l02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleC0l02>
//         <S.PlaylistTitleC0l03>АЛЬБОМ</S.PlaylistTitleC0l03>
//         <S.PlaylistTitleC0l04>
//           <S.PlaylistTitleSvg alt="time">
//             <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
//           </S.PlaylistTitleSvg>
//         </S.PlaylistTitleC0l04>
//       </S.ContentTitle>
//        <S.ContentPlaylist>{trackItems}</S.ContentPlaylist>
//        </S.CenterBlockContent>
//        </>
//     )
//   }

//   const clickTrack = ({ track }) => {
//     setVisiblePlayer(true)
//     dispatch(setActiveTrack({ track }))
//     setIsPlay(true)
//     return
//   }
//   const trackItems = tracks.map((track) => (
//     <S.PlaylistItem key={track.id}>
//       <S.PlaylistTreck>
//         <S.TreckTitle>
//           <S.TreckTitleImage>
//             {activeTrack.id === track.id ? (
//               <S.TreckTitleImageActive>
//                 {isplay ? <S.ActiveTrack /> : ''}
//               </S.TreckTitleImageActive>
//             ) : (
//               <S.TreckTitleSvg alt="music">
//                 <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
//               </S.TreckTitleSvg>
//             )}
//           </S.TreckTitleImage>
//           <S.TreckTitleText>
//             <S.TreckTitleLink
//               onClick={() => {
//                 clickTrack({ track })
//               }}
//               to="#"
//             >
//               {track.name}
//             </S.TreckTitleLink>
//           </S.TreckTitleText>
//           <S.TreckAuthor>
//             <S.TreckAuthorLink to="/AuthorList">
//               {track.author}
//             </S.TreckAuthorLink>
//           </S.TreckAuthor>
//           <S.TreckAlbum>
//             <S.TreckAlbumLink>{track.album}</S.TreckAlbumLink>
//           </S.TreckAlbum>
//           <div>
//             <S.TreckTimeSvg alt="time">
//               <use xlinkHref="img/icon/sprite.svg#icon-like" />
//             </S.TreckTimeSvg>
//             <S.TreckTimeText>
//               {(Number(track.duration_in_seconds) / 60).toFixed(2)}
//             </S.TreckTimeText>
//           </div>
//         </S.TreckTitle>
//       </S.PlaylistTreck>
//     </S.PlaylistItem>
//   ))
//   return toggleErrorContext()
// }



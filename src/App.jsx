// import { Main } from '../src/pages/Main/MainPage'
// import { useEffect, useState } from 'react'
// import * as S from '../src/components/TrackList/StyledTrackList.js'
// import { getAllTracks } from './Api.jsx'

// export const App = ({ setUser }) => {
//    const [isLoading, setIsLoading] = useState(true)
//    function GetTracks() {
//       const [allTracks, setAllTracks] = useState([])
//       const [errorGetTracks, setErrorGetTracks] = useState(null)

//       useEffect(() => {
//         getAllTracks()
//           .then((arrayTracks) => {
//             console.log(arrayTracks)
//             setAllTracks(arrayTracks)
//             setIsLoading(false)
//           })
//           .catch((error) => {
//             console.log(error.message)
//             setErrorGetTracks(error.message)
//           })
//       }, [])
//       const tracks = allTracks.map((track) => (
//         <S.PlaylistItem key={track.id}>
//           <S.PlaylistTreck>
//             <S.TreckTitle>
//               <S.TreckTitleImage>
//                 <S.TreckTitleSvg alt="music">
//                   <use xlinkHref="img/icon/sprite.svg#icon-note" />
//                 </S.TreckTitleSvg>
//               </S.TreckTitleImage>
//               <S.TreckTitleText>
//                 <S.TreckTitleLink  onClick={() => {clickTrack()}} to="#">
//                   {track.name}
//                 </S.TreckTitleLink>
//               </S.TreckTitleText>
//               <S.TreckAuthor>
//                 <S.TreckAuthorLink to="/AuthorList">
//                   {track.author}
//                 </S.TreckAuthorLink>
//               </S.TreckAuthor>
//               <S.TreckAlbum>
//                 <S.TreckAlbumLink>{track.album}</S.TreckAlbumLink>
//               </S.TreckAlbum>
//               <div>
//                 <S.TreckTimeSvg alt="time">
//                   <use xlinkHref="img/icon/sprite.svg#icon-like" />
//                 </S.TreckTimeSvg>
//                 <S.TreckTimeText>{(Number(track.duration_in_seconds)/ 60).toFixed(2)}</S.TreckTimeText>
//               </div>
//             </S.TreckTitle>
//           </S.PlaylistTreck>
//         </S.PlaylistItem>
//       ))}
//       setTrackItems(tracks)
//    return (
//       <div className="app">
//        <Main setUser={setUser} trackItems={trackItems} />
//       </div>
//    )}
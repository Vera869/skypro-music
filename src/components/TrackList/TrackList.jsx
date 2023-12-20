import {useEffect, useState } from "react"
import {arrayTracks} from "./ArrayTracks"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from "../TrackList/StyledTrackList.js"
import {Link} from 'react-router-dom'

function Tracks() {
   const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      setTimeout(() => {
          setIsLoading(false)
      }, 3000)
  }, [])


   const trackItems = arrayTracks.map((track) => (
     <S.PlaylistItem key={track.id}>
         <S.PlaylistTreck>
               <S.TreckTitle>
                  <S.TreckTitleImage>
                     <S.TreckTitleSvg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                     </S.TreckTitleSvg>
                  </S.TreckTitleImage>
                  <S.TreckTitleText>
                     {isLoading ? (<Skeleton width={270}
                                             baseColor="#202020"
                                             highlightColor="#444"
                                          />):(<Link to="/trackName">
                                          <S.TreckTitleLink>
                                             {track.trackName}
                                             {track.remix ? (
                                             <S.TreckTitleSpan>({track.remix})
                                             </S.TreckTitleSpan>
                                             ) : ("")}
                                          </S.TreckTitleLink>
                                          </Link>)}
                  </S.TreckTitleText>
                  <S.TreckAuthor>
                     {isLoading ? (<Skeleton
                                             width={270}
                                             baseColor="#202020"
                                             highlightColor="#444"
                                       />) : (<Link to="/TrackAuthtor">
                                       <S.TreckAuthorLink>
                                       {track.trackAuthor}
                                       </S.TreckAuthorLink>
                                       </Link>)}
                  </S.TreckAuthor>
                  <S.TreckAlbum>
                     {isLoading ? (<Skeleton
                                             width={315}
                                             baseColor="#202020"
                                             highlightColor="#444"
                                       />) : ( <Link to="/TrackAlbum">
                                       <S.TreckAlbumLink>
                                       {track.album}
                                       </S.TreckAlbumLink>
                                       </Link>)}
                  </S.TreckAlbum>
                  <div>
                     {isLoading ? (<Skeleton
                                             width={60}
                                             baseColor="#202020"
                                             highlightColor="#444"
                                       />) : (<><S.TreckTimeSvg alt="time">
                                       <use xlinkHref="img/icon/sprite.svg#icon-like" />
                                       </S.TreckTimeSvg>
                                       <S.TreckTimeText> {track.trackTime}</S.TreckTimeText>
                                       </>)}
                  </div>
               </S.TreckTitle>
         </S.PlaylistTreck>
     </S.PlaylistItem>
   ));
 
   return <S.ContentPlaylist>{trackItems}</S.ContentPlaylist>;
 }
 export default Tracks
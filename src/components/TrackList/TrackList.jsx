import {useEffect, useState } from "react"
import {arrayTracks} from "./ArrayTracks"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from "../TrackList/StyledTrackList.js"

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
                                          />):(
                                          <S.TreckTitleLink href="http://">
                                             {track.trackName}
                                             {track.remix ? (
                                             <S.TreckTitleSpan className="track__title-span">({track.remix})
                                             </S.TreckTitleSpan>
                                             ) : ("")}
                                          </S.TreckTitleLink>)}
                  </S.TreckTitleText>
                  <S.TreckAuthor>
                     {isLoading ? (<Skeleton
                                             width={270}
                                             baseColor="#202020"
                                             highlightColor="#444"
                                       />) : (<S.TreckAuthorLink href="http://">
                                       {track.trackAuthor}
                                       </S.TreckAuthorLink>)}
                  </S.TreckAuthor>
                  <S.TreckAlbum>
                     {isLoading ? (<Skeleton
                                             width={315}
                                             baseColor="#202020"
                                             highlightColor="#444"
                                       />) : ( <S.TreckAlbumLink href="http://">
                                       {track.album}
                                       </S.TreckAlbumLink>)}
                  </S.TreckAlbum>
                  <div>
                     {isLoading ? (<Skeleton
                                             width={60}
                                             baseColor="#202020"
                                             highlightColor="#444"
                                       />) : (<><S.TreckTimeSvg className="track__time-svg" alt="time">
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
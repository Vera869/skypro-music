import * as S from '../TrackList/StyledTrackList.js'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const skeletonTracks = () => {
   <S.PlaylistTreck>
   <S.TreckTitle>
     <S.TreckTitleImage>
       <S.TreckTitleSvg alt="music">
         <use xlinkHref="img/icon/sprite.svg#icon-note" />
       </S.TreckTitleSvg>
     </S.TreckTitleImage>
     <S.TreckTitleText>
         <Skeleton width={270} height={50} baseColor="#202020" highlightColor="#444" />
     </S.TreckTitleText>
     <S.TreckAuthor>
         <Skeleton width={270} height={50} baseColor="#202020" highlightColor="#444" />
     </S.TreckAuthor>
     <S.TreckAlbum>
         <Skeleton width={315} height={50} baseColor="#202020" highlightColor="#444" />
     </S.TreckAlbum>
     <div>
         <Skeleton width={60} height={50} baseColor="#202020" highlightColor="#444" />
     </div>
   </S.TreckTitle>
 </S.PlaylistTreck>
}


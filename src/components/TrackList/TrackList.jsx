import { useEffect, useState } from 'react'
import * as S from '../TrackList/StyledTrackList.js'
import {getAllTracks} from '../../Api.jsx'
import {skeletonTracks} from './SkeletonTracks.jsx'

function Tracks() {
  const [isLoading, setIsLoading] = useState(true);
  const [allTracks, setAllTracks] = useState([]);
  const [errorGetTracks, setErrorGetTracks] = useState(null);

  useEffect(() => {
    getAllTracks().then((arrayTracks) => {
      console.log(arrayTracks);
      setAllTracks(arrayTracks);
      setIsLoading(false);
    }).catch((error) => {
      console.log(error.message);
      setErrorGetTracks(error.message);
    })
  }, [])
 
  const trackItems = allTracks.map((track) => (
   
    <S.PlaylistItem key={track.id}>
       <S.PlaylistTreck>
        <S.TreckTitle>
          <S.TreckTitleImage>
            <S.TreckTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </S.TreckTitleSvg>
          </S.TreckTitleImage>
          <S.TreckTitleText>
              <S.TreckTitleLink to="/Trak">
                {track.name}
                {track.remix ? (
                  <S.TreckTitleSpan>({track.remix})</S.TreckTitleSpan>
                ) : (
                  ''
                )}
              </S.TreckTitleLink>
          </S.TreckTitleText>
          <S.TreckAuthor>
              <S.TreckAuthorLink to="/AuthorList">
                {track.author}
              </S.TreckAuthorLink>
          </S.TreckAuthor>
          <S.TreckAlbum>
              <S.TreckAlbumLink>{track.album}</S.TreckAlbumLink>
          </S.TreckAlbum>
          <div>
                <S.TreckTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TreckTimeSvg>
                <S.TreckTimeText>{track.duration_in_seconds}</S.TreckTimeText>
          </div>
        </S.TreckTitle>
      </S.PlaylistTreck>
     
    </S.PlaylistItem>
  ))
  // const loadingTracks = () => {
  //   {isLoading ? <skeletonTracks /> : trackItems}
  // }

  return <S.ContentPlaylist>{errorGetTracks ? (<p>К сожалению, при загрузке плэйлиста произошла ошибка, пожалуйста, попробуйте позже.</p>) : ""}
  {isLoading ? <skeletonTracks /> : trackItems}</S.ContentPlaylist>
}
export default Tracks

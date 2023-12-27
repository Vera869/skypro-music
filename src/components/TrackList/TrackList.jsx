import { SkeletonTracks } from './SkeletonTracks.jsx'
import { useEffect, useState } from 'react'
import * as S from '../TrackList/StyledTrackList.js'
import { getAllTracks } from '../../Api.jsx'


function GetTracks() {
  const [isLoading, setIsLoading] = useState(true)
  const [allTracks, setAllTracks] = useState([])
  const [errorGetTracks, setErrorGetTracks] = useState(null)

  useEffect(() => {
    getAllTracks()
      .then((arrayTracks) => {
        console.log(arrayTracks)
        setAllTracks(arrayTracks)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error.message)
        setErrorGetTracks(error.message)
      })
  }, [])
  // const toggleErrorContext = () => {
  //   setIsLoading(false);
  //   return errorGetTracks ? (
  //     <S.ErrorMassege>
  //       К сожалению, при загрузке плэйлиста произошла ошибка, пожалуйста,
  //       попробуйте позже.
  //     </S.ErrorMassege>
  //   ) : (
  //     '')
  // }
  // const trackTime = (track) => {
  //   const time = (Number(track.duration_in_seconds)/ 60);
  //   console.log(time);
  //   return time
  // }
  // const clickTrack = ({track}) => {
  //   return 

  // }
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
            <S.TreckTitleLink  onClick={() => {clickTrack()}} to="#">
              {track.name}
              {/* {track.remix ? (
                <S.TreckTitleSpan>({track.remix})</S.TreckTitleSpan>
              ) : (
                ''
              )} */}
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
  return ( 
    <S.ContentPlaylist>
      {errorGetTracks ? (
        <S.ErrorMassege>
          К сожалению, при загрузке плэйлиста произошла ошибка, пожалуйста,
          попробуйте позже.
        </S.ErrorMassege>
      ) : (
        ''
      )}
      {isLoading ? <SkeletonTracks /> : trackItems}
    </S.ContentPlaylist>
  )
}
export default GetTracks

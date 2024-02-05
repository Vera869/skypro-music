import 'react-loading-skeleton/dist/skeleton.css'
import * as S from '../Player/StyledAudioPleer.js'
import { useState, useEffect, useRef } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {
  playNextTrack,
  playPrevTrack,
  setIsShuffled,
  setIsPlay,
  setShuffledTracks,
} from '../../Store/Slices/sliceTrack.js'

function AudioPlayer(
  ) {
  const audioRef = useRef(null)
  const refProgress = useRef()

  const [isLooped, setIsLooped] = useState(false)
  const [currentTime, setCurrentTime] = useState(0) // стэйт текущего времени воспроизведения
  const [timeProgress, setTimeProgress] = useState(0) // стэйт прогресс бара

  const activeTrack = useSelector((state) => state.tracks.activeTrack) //активный трек{}
  const dispatch = useDispatch()
  let isShuffled = useSelector((state) => state.tracks.isShuffled)
  const isVisible = Boolean(useSelector((state) => state.tracks.activeTrack.id)) 
  const isPlay = useSelector((state) => state.tracks.isPlay)
  const duration = audioRef.current?.duration || 0 //общее время трека

  const timeFormat = (time) => {
    const roundedTime = Math.round(time)
    const minutes = Math.floor(roundedTime / 60)
    let seconds = roundedTime % 60
    if (seconds < 10) {
      seconds = '0' + seconds
    }

    return `${minutes}:${seconds}`
  }

  const handleStart = () => {
    console.log('PLAY')
    audioRef.current.play()
    dispatch(setIsPlay())
  }

  const handleStop = () => {
    console.log('PAUSE')
    audioRef.current.pause()
    dispatch(setIsPlay())
  }

  const togglePlay = isPlay ? handleStop : handleStart
  useEffect(() => {
    const updateCurrentTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime)
      }
    }
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', updateCurrentTime)
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateCurrentTime)
      }
    }
  }, [audioRef])
  useEffect(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)

      if (audioRef.current.currentTime === audioRef.current.duration) {
        setCurrentTime(0)
      }
    }
  }, [audioRef.current, audioRef.current?.currentTime])

  useEffect(() => {
    if(isPlay == false) {
      dispatch(setIsPlay())
    }
  }, [activeTrack])

  const handleIsLoop = () => {
    audioRef.current.loop = true
    setIsLooped(true)
  }

  const handleUnloop = () => {
    audioRef.current.loop = false
    setIsLooped(false)
  }
  const toggleLoop = isLooped ? handleUnloop : handleIsLoop

  const handleChangeVolume = (el) => {
    const newVolume = parseFloat(el.target.value)
    const limitedVolume = Math.max(0, Math.min(1, newVolume))

    if (audioRef.current) {
      audioRef.current.volume = limitedVolume
    }
  }
  const onChangeProgress = () => {
    audioRef.current.currentTime = refProgress.current.value
  }
  const butNextTrack = () => dispatch(playNextTrack())
  const butPrevtTrack = () => {
    if (audioRef.current.currentTime > 5) {
      audioRef.current.currentTime = 0
    } else {
      dispatch(playPrevTrack())
    }
  }
  const butShuffledTrack = () => {
    dispatch(setShuffledTracks())
    dispatch(setIsShuffled())
  }
  // const stared_user = useSelector((state) => state.tracks.activeTrack.id)
  // const trackID = useSelector((state) => state.tracks.activeTrack.id)
  // const favTrack = { id: trackID, stared_user}

  // const [addLike] = useAddFavTrackMutation();
  // const [dislike] = useDeleteFavTrackMutation();
 
  // const userId = Number(localStorage.getItem('user'));
  // const [isFavourite, setFavourite] = useState(false)

  // useEffect(() => {
  //     setFavourite(stared_user.some((user) => user.id === userId))
  //   }, [favTrack])

  //   const handleFavorite = () => {
  //     if (isFavourite) dislike(trackID)
  //     else addLike(trackID)
  //   }
  return (
    isVisible
    && (
      <S.Bar>
        {activeTrack ? (
          <audio
            ref={audioRef}
            src={activeTrack.track_file}
            autoPlay
            // ={isPlay}
            onTimeUpdate={() => setTimeProgress(audioRef.current.currentTime)}
            onEnded={() => dispatch(playNextTrack())}
          >
            Здесь будет звучать Музыка!
          </audio>
        ) : (
          ''
        )}
        <S.BarContent>
          <S.TrackTime>
            {timeFormat(currentTime) + ' / ' + timeFormat(duration)}
          </S.TrackTime>
          <S.BarPlayerProgress>
            <S.StyledProgressBar
              ref={refProgress}
              type="range"
              min={0}
              max={duration}
              value={timeProgress}
              step={0.01}
              onChange={onChangeProgress}
            />
          </S.BarPlayerProgress>
          <S.BarPleerBlock>
            <S.BarPleer>
              <S.PlayerControls>
                <S.PlayerBtnPrev onClick={butPrevtTrack}>
                  <S.PlayerBtnPrevSvg alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay className="_btn" onClick={togglePlay}>
                  <S.PlayerBtnPlaySvg alt="play">
                    {isPlay ? (
                      <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
                    ) : (
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    )}
                  </S.PlayerBtnPlaySvg>
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext onClick={butNextTrack}>
                  <S.PlayerBtnNextSvg alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat onClick={toggleLoop} className="_btn-icon">
                  <S.PlayerBtnRepeatSvg
                    alt="repeat"
                    isLooped={isLooped}
                  >
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle
                  onClick={butShuffledTrack}
                  className="_btn-icon"
                >
                  <S.PlayerBtnShuffleSvg IsShuffled={isShuffled} alt="shuffle">
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                  </S.PlayerBtnShuffleSvg>
                </S.PlayerBtnShuffle>
              </S.PlayerControls>

              <S.PlayerTrackPlay>
                <S.TrackPlayContain>
                  <S.TrackPlayImage>
                      <S.TrackPlaySvg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </S.TrackPlaySvg>
                  </S.TrackPlayImage>
                  <S.TrackPlayAuthor>
                      <S.TrackPlayAuthorLink>
                        {activeTrack.author}
                      </S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                      <S.TrackPlayAlbumLink>
                        {activeTrack.name}
                      </S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>

                <S.TrackPlayLikeDis>
                      <S.TrackPlayLike className="_btn-icon" 
                      // onClick={handleFavorite()}
                      >
                        <S.TrackPlayLikeSvg alt="like" 
                        // fill={isFavourite ? 'violet' : 'gray'}
                        >
                          <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                        </S.TrackPlayLikeSvg>
                      </S.TrackPlayLike>
                      <S.TrackPlayDislike className="_btn-icon">
                        <S.TrackPlayDislikeSvg alt="dislike">
                          <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                        </S.TrackPlayDislikeSvg>
                      </S.TrackPlayDislike>
                </S.TrackPlayLikeDis>
              </S.PlayerTrackPlay>
            </S.BarPleer>
            <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImege>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                  </S.VolumeSvg>
                </S.VolumeImege>
                <S.VolumeProgress className="_btn">
                  <S.VolumeProgressLine
                    className="_btn"
                    type="range"
                    name="range"
                    min="0"
                    max="1"
                    step="0.01"
                    onChange={(el) => handleChangeVolume(el)}
                  />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.BarPleerBlock>
        </S.BarContent>
      </S.Bar>
    )
  )
}
export default AudioPlayer

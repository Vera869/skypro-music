import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from '../Player/StyledAudioPleer.js'
import { useState, useEffect, useRef } from 'react';

function AudioPlayer({ isVisiblePlayer, isLoading, trackPlayed, setTrackPlayed }) {
  const audioRef = useRef(null);
  const refProgress = useRef();

  const [isLooped, setIsLooped] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // стэйт текущего времени воспроизведения
  const [timeProgress, setTimeProgress] = useState(0); // стэйт прогресс бара

  const duration = audioRef.current?.duration || 0 //общее время трека

 const timeFormat = (time) => {
    const roundedTime = Math.round(time);
    const minutes = Math.floor(roundedTime / 60);
    let seconds = roundedTime % 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    
    return `${minutes}:${seconds}`;
  };
  
  
  const handleStart = () => {
    console.log(duration);
    audioRef.current.play() ;
    setTrackPlayed(true);
  };

  const handleStop = () => {
    console.log("PAUSE");
    audioRef.current.pause();
    setTrackPlayed(false);
  };

  const togglePlay = trackPlayed ? handleStop : handleStart;
  useEffect(() => {
    const updateCurrentTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateCurrentTime);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateCurrentTime);
      }
    };
  }, [audioRef]);
  useEffect(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);

      if (audioRef.current.currentTime === audioRef.current.duration) {
        setCurrentTime(0);
        setTrackPlayed(false);
      }
    }
  }, [audioRef.current, audioRef.current?.currentTime]);
  
  const handleIsLoop = () => {
    audioRef.current.loop = true;
    setIsLooped(true);
  };

  const handleUnloop = () => {
    audioRef.current.loop = false;
    setIsLooped(false);
  };
  const toggleLoop = isLooped ? handleUnloop : handleIsLoop;

  const handleChangeVolume = (el) => {
    const newVolume = parseFloat(el.target.value);
    const limitedVolume = Math.max(0, Math.min(1, newVolume));

    if (audioRef.current) {
      audioRef.current.volume = limitedVolume;
    }
  };
  const onChangeProgress = () => {
    audioRef.current.currentTime = refProgress.current.value;
  }
  const butnNotWorking = () => {
    alert("Еще не реализовано, пожалуйста, попробуйте позже")
  }
  return (
    isVisiblePlayer && (
      <S.Bar>
        {trackPlayed ? (
          <audio ref={audioRef} src={trackPlayed.track_file} autoPlay
          onTimeUpdate={() => setTimeProgress(audioRef.current.currentTime)}>
           Здесь будет звучать Музыка!
          </audio>
        ) : (
          ''
        )}
        <S.BarContent>
        <S.TrackTime>
        {timeFormat(currentTime) + " / " + timeFormat(duration)}
          </S.TrackTime>
          <S.BarPlayerProgress >
          <S.StyledProgressBar
              ref={refProgress}
              type="range"
              min={0}
              max={duration}
              value={timeProgress}
              step={0.01}
              onChange={onChangeProgress}
              $color="#580EA2"
            />
          </S.BarPlayerProgress>
          <S.BarPleerBlock>
            <S.BarPleer>
              <S.PlayerControls>
                <S.PlayerBtnPrev onClick={butnNotWorking} >
                  <S.PlayerBtnPrevSvg alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay className="_btn" onClick={togglePlay} >
                  <S.PlayerBtnPlaySvg alt="play">
                    {/* <use xlinkHref="img/icon/sprite.svg#icon-play"></use> */}
                    {trackPlayed ? (
                      <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
                    ) : (
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    )}
                  </S.PlayerBtnPlaySvg>
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext onClick={butnNotWorking} >
                  <S.PlayerBtnNextSvg alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat className="_btn-icon"  >
                  <S.PlayerBtnRepeatSvg alt="repeat" onClick={toggleLoop} isLooped={isLooped}>
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle  onClick={butnNotWorking} className="_btn-icon">
                  <S.PlayerBtnShuffleSvg alt="shuffle">
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                  </S.PlayerBtnShuffleSvg>
                </S.PlayerBtnShuffle>
              </S.PlayerControls>

              <S.PlayerTrackPlay>
                <S.TrackPlayContain>
                  <S.TrackPlayImage>
                    {isLoading ? (
                      <Skeleton
                        width={55}
                        height={55}
                        baseColor="#202020"
                        highlightColor="#444"
                      />
                    ) : (
                      <S.TrackPlaySvg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </S.TrackPlaySvg>
                    )}
                  </S.TrackPlayImage>
                  <S.TrackPlayAuthor>
                    {isLoading ? (
                      <Skeleton
                        width={270}
                        baseColor="#202020"
                        highlightColor="#444"
                      />
                    ) : (
                      <S.TrackPlayAuthorLink>
                        {trackPlayed.author}
                      </S.TrackPlayAuthorLink>
                    )}
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    {isLoading ? (
                      <Skeleton
                        width={270}
                        baseColor="#202020"
                        highlightColor="#444"
                      />
                    ) : (
                      <S.TrackPlayAlbumLink>
                        {trackPlayed.name}
                      </S.TrackPlayAlbumLink>
                    )}
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>

                <S.TrackPlayLikeDis>
                  {isLoading ? (
                    <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <>
                      <S.TrackPlayLike className="_btn-icon">
                        <S.TrackPlayLikeSvg alt="like">
                          <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                        </S.TrackPlayLikeSvg>
                      </S.TrackPlayLike>
                      <S.TrackPlayDislike className="_btn-icon">
                        <S.TrackPlayDislikeSvg alt="dislike">
                          <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                        </S.TrackPlayDislikeSvg>
                      </S.TrackPlayDislike>
                    </>
                  )}
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

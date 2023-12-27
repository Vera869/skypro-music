import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from '../Player/StyledAudioPleer.js'

function AudioPlayer({ isVisiblePlayer, isLoading, trackPlayed }) {
  return (
    isVisiblePlayer && (
      <S.Bar>
        <S.BarContent>
          <S.BarPlayerProgress></S.BarPlayerProgress>
          <S.BarPleerBlock>
            <S.BarPleer>
              <S.PlayerControls>
                <S.PlayerBtnPrev>
                  <S.PlayerBtnPrevSvg alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay className="_btn">
                  <S.PlayerBtnPlaySvg alt="play">
                    <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                  </S.PlayerBtnPlaySvg>
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext>
                  <S.PlayerBtnNextSvg alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat className="_btn-icon">
                  <S.PlayerBtnRepeatSvg alt="repeat">
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle className="_btn-icon">
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

import * as S from '../../components/CenterBlock/StyledCenterBlock'
import { GetTracks } from '../../components/TrackList/TrackList'

export const Main = ({
  isplay,
  setIsPlay,
  isLoading,
  errorGetTracks,
  setVisiblePlayer,
}) => {
  return (
    <S.MainCenterBlock>
      <GetTracks
        isLoading={isLoading}
        errorGetTracks={errorGetTracks}
        setVisiblePlayer={setVisiblePlayer}
        isplay={isplay}
        setIsPlay={setIsPlay}
      />
    </S.MainCenterBlock>
  )
}

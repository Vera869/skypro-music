import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const pulsar = keyframes`

0% {
  opacity: 0;
}
50% {
  transform: scale(1.4);
  opacity: 0.4;
}
`
export const PlaylistItem = styled.li`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`
export const PlaylistTreck = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const TreckTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const TreckTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
`
export const TreckTitleText = styled.div`
  width: 395px;
`
export const TreckTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
  // animation: ${pulsar}  1000ms cubic-bezier(0.9, 0.7, 0.5, 0.9) infinite;
`
export const ActiveTrack = styled.div`
width: 16px;
height: 16px;
fill: #580EA2;
background-color: #580EA2;
border-radius: 50%;
display: block;
// position: relative;
animation: ${pulsar} 1000ms cubic-bezier(0.9, 0.7, 0.5, 0.9) infinite;
`
export const TreckTitleLink = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`
export const TreckTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`
export const TreckAuthor = styled.div`
  width: 321px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`
export const TreckAuthorLink = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`
export const TreckAlbum = styled.div`
  width: 245px;
`
export const TreckAlbumLink = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`
export const TreckTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`
export const TreckTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`
export const ContentPlaylist = styled.div`
  height: 824px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
export const ErrorMassege = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  color: #ffffff;
`




import SideBar from '../../components/SideBar/Sidebar.jsx'
import CenterBlock from '../../components/CenterBlock/CenterBlock.jsx'
import AudioPlayer from '../../components/Player/AudioPlayer.jsx'
import NavMenu from '../../components/NavMenu/NavMenu.jsx'
import * as S from './StyledMain.js'
import { useEffect, useState } from 'react'
import { getAllTracks } from '../../Api.jsx'

export const Main = ({ setUser, logout }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [allTracks, setAllTracks] = useState([])
  const [errorGetTracks, setErrorGetTracks] = useState(null)

  const [isVisiblePlayer, setVisiblePlayer] = useState(false)
  const [trackPlayed, setTrackPlayed] = useState([])

  // const [isLoginMode, setIsLoginMode] = useState(false);

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
  return (
    <>
      <div>
        <S.Wrapper>
          <S.Container>
            <S.Main>
              <NavMenu logout={logout}/>
              <CenterBlock
                isLoading={isLoading}
                allTracks={allTracks}
                errorGetTracks={errorGetTracks}
                setVisiblePlayer={setVisiblePlayer}
                setTrackPlayed={setTrackPlayed}
              />
              <SideBar
                setUser={setUser}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            </S.Main>
            <footer>
              <AudioPlayer
                isVisiblePlayer={isVisiblePlayer}
                isLoading={isLoading}
                trackPlayed={trackPlayed}
                setTrackPlayed={setTrackPlayed}
              />
            </footer>
          </S.Container>
        </S.Wrapper>
      </div>
    </>
  )
}

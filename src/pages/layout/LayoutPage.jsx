import SideBar from '../../components/SideBar/Sidebar.jsx'
import AudioPlayer from '../../components/Player/AudioPlayer.jsx'
import NavMenu from '../../components/NavMenu/NavMenu.jsx'
import * as S from '../Main/StyledMain.js'
import { useEffect, useState } from 'react'
import { getAllTracks } from '../../Api.jsx'

import { useDispatch } from 'react-redux'
import { setTracks } from '../../Store/Slices/sliceTrack.js'
import { Outlet } from 'react-router-dom'

export const LayoutPage = ({
  setUser,
  logout,
  isplay,
  setIsPlay,
  setVisiblePlayer,
  isVisiblePlayer,
  isLoading,
  setIsLoading,
  // playlist, setPlaylist,
}) => {
  const [errorGetTracks, setErrorGetTracks] = useState(null)
  const [playlist, setPlaylist] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    getAllTracks()
      .then((tracks) => {
        dispatch(setTracks({ tracks }))
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error.message)
        setErrorGetTracks(error.message)
      })
  }, []) //dispatch
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu logout={logout} />

            <Outlet
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              errorGetTracks={errorGetTracks}
              setErrorGetTracks={setErrorGetTracks}
              setVisiblePlayer={setVisiblePlayer}
              isplay={isplay}
              setIsPlay={setIsPlay}
              playlist={playlist}
              setPlaylist={setPlaylist}
            />

            <SideBar
              setUser={setUser}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              logout={logout}
              playlist={playlist}
              setPlaylist={setPlaylist}
            />
          </S.Main>
          <footer>
            <AudioPlayer
              isVisiblePlayer={isVisiblePlayer}
              isLoading={isLoading}
              isplay={isplay}
              setIsPlay={setIsPlay}
            />
          </footer>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

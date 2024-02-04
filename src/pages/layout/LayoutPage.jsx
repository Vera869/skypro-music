import SideBar from '../../components/SideBar/Sidebar.jsx'
import AudioPlayer from '../../components/Player/AudioPlayer.jsx'
import NavMenu from '../../components/NavMenu/NavMenu.jsx'
import * as S from '../Main/StyledMain.js'
import { useEffect, useState } from 'react'
// import { getAllTracks } from '../../Api.jsx'

import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

export const LayoutPage = ({
  setUser,
  logout,
  isplay,
  setIsPlay,
  isLoading,
  setIsLoading,
}) => {
  // const [errorGetTracks, setErrorGetTracks] = useState(null)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   getAllTracks()
  //     .then((tracks) => {
  //       dispatch(setTracks({ tracks }))
  //       setIsLoading(false)
  //     })
  //     .catch((error) => {
  //       console.log(error.message)
  //       setErrorGetTracks(error.message)
  //     })
  // }, []) //dispatch
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu logout={logout} />

            <Outlet/>

            <SideBar
              setUser={setUser}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              logout={logout}
            />
          </S.Main>
          <footer>
            <AudioPlayer
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

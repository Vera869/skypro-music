import SideBar from '../../components/SideBar/Sidebar.jsx'
import CenterBlock from '../../components/CenterBlock/CenterBlock.jsx'
import AudioPlayer from '../../components/Player/AudioPlayer.jsx'
import NavMenu from '../../components/NavMenu/NavMenu.jsx'
import * as S from './StyledMain.js'
import { useEffect, useState } from 'react'
import { getAllTracks } from '../../Api.jsx'

import { useDispatch} from 'react-redux'
import { setTracks } from '../../Store/Slices/sliceTrack.js'

export const Main = ({ setUser, logout }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [errorGetTracks, setErrorGetTracks] = useState(null)

  const [isVisiblePlayer, setVisiblePlayer] = useState(false)


  const dispatch = useDispatch()
  // const activeTrack = useSelector((state) => state.tracks.activeTrack)

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
  }, [])
  return (
    <>
      <div>
        <S.Wrapper>
          <S.Container>
            <S.Main>
              <NavMenu logout={logout} />
              <CenterBlock
                isLoading={isLoading}
                errorGetTracks={errorGetTracks}
                setVisiblePlayer={setVisiblePlayer}
              />
              <SideBar
                setUser={setUser}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                logout={logout}
              />
            </S.Main>
            <footer>
              <AudioPlayer
                isVisiblePlayer={isVisiblePlayer}
                isLoading={isLoading}
              />
            </footer>
          </S.Container>
        </S.Wrapper>
      </div>
    </>
  )
}

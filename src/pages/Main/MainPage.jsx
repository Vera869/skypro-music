import SideBar from '../../components/SideBar/Sidebar.jsx'
import CenterBlock from '../../components/CenterBlock/CenterBlock.jsx'
import AudioPlayer from '../../components/Player/AudioPlayer.jsx'
import NavMenu from '../../components/NavMenu/NavMenu.jsx'
import * as S from '../../StyledMain.js'
// import { useEffect, useState } from 'react'
// import { getAllTracks } from './Api.jsx'

export const Main = ({ setUser }) => {
  // const [isLoading, setIsLoading] = useState(true)
  return (
    <>
      <div>
        <S.Wrapper>
          <S.Container>
            <S.Main>
              <NavMenu setUser={setUser} />
              <CenterBlock />
              <SideBar setUser={setUser} />
            </S.Main>
            <footer>
              <AudioPlayer />
            </footer>
          </S.Container>
        </S.Wrapper>
      </div>
    </>
  )
}

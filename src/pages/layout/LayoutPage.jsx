import SideBar from '../../components/SideBar/Sidebar.jsx'
import AudioPlayer from '../../components/Player/AudioPlayer.jsx'
import NavMenu from '../../components/NavMenu/NavMenu.jsx'
import * as S from '../Main/StyledMain.js'

import { Outlet } from 'react-router-dom'

export const LayoutPage = ({ setUser, logout, isLoading, setIsLoading }) => {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu logout={logout} />

            <Outlet />

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
            />
          </footer>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

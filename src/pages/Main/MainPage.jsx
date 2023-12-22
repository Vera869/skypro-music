import SideBar from '../../components/SideBar/Sidebar.jsx'
import CenterBlock from '../../components/CenterBlock/CenterBlock.jsx'
import AudioPlayer from '../../components/Player/AudioPlayer.jsx'
import NavMenu from '../../components/NavMenu/NavMenu.jsx'
import * as S from '../../StyledMain.js'

export const Main = ({ setUser }) => {
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

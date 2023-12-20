import SideBar from '../../components/SideBar/Sidebar.jsx'
import CenterBlock from '../../components/CenterBlock/CenterBlock.jsx'
import AudioPlayer from '../../components/Player/AudioPlayer.jsx'
import NavMenu from '../../components/NavMenu/NavMenu.jsx'
import * as S from "../../StyledApp.js"
import GlobalStyle  from "../../GlobalStyled.js"

export const Main = ({setUser}) => {
  
  return (
    <>
    <GlobalStyle/>
    <div className="App">
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu />
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


import SideBar from './components/SideBar/Sidebar.jsx'
import CenterBlock from './components/CenterBlock/CenterBlock.jsx'
import AudioPlayer from './components/Player/AudioPlayer.jsx'
import NavMenu from './components/NavMenu/NavMenu.jsx'
import * as S from "../src/StyledApp.js"
import GlobalStyle  from "../src/GlobalStyled.js"

function App() {
  return (
    <>
    <GlobalStyle/>
    <div className="App">
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu />
            <CenterBlock />
            <SideBar />
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

export default App
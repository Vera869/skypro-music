import './App.css'
import SideBar from './components/SideBar/Sidebar.jsx'
import CenterBlock from './components/CenterBlock/CenterBlock.jsx'
// import AudioPlayer from './components/Player/AudioPlayer.jsx'
import NavMenu from './components/NavMenu/NavMenu.jsx'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <NavMenu />
            <CenterBlock />
            <SideBar />
          </main>
          {/* <AudioPlayer /> */}
          <footer className="footer"></footer>
        </div>
      </div>
    </div>
  )
}

export default App
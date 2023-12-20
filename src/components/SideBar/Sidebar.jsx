import * as S from '../SideBar/StyledSideBar.js'
import { CategoryPlayLists } from './CategoryPlaylists.jsx'
import { useNavigate} from 'react-router-dom'

function SideBar() {

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user") 
    
    navigate("/login")

  }

  return (
    <S.MineSideBar className="main__sidebar sidebar">
      <S.SideBarPersonal>
        <S.SideBarPersonalName>Vera.Buganova</S.SideBarPersonalName>
        
        <S.SideBarIcon onClick={logout}>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SideBarIcon>
        
      </S.SideBarPersonal>
      <S.SideBarBlock>
        <S.SideBarList>
          <CategoryPlayLists />
        </S.SideBarList>
      </S.SideBarBlock>
    </S.MineSideBar>
  )
}
export default SideBar

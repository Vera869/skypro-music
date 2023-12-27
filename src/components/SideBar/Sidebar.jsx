import * as S from '../SideBar/StyledSideBar.js'
import { CategoryPlayLists } from './CategoryPlaylists.jsx'
import { useNavigate } from 'react-router-dom'

function SideBar({ 
  setUser,
  isLoading,
  setIsLoading }) {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('user')
    setUser('null')
    navigate('/login')
  }

  return (
    <S.MineSideBar className="sidebar">
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
          <CategoryPlayLists setUser={setUser}
                isLoading={isLoading}
                setIsLoading={setIsLoading} />
        </S.SideBarList>
      </S.SideBarBlock>
    </S.MineSideBar>
  )
}
export default SideBar

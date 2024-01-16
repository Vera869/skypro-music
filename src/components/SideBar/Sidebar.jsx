import * as S from '../SideBar/StyledSideBar.js'
import { CategoryPlayLists } from './CategoryPlaylists.jsx'
import { UserContext } from '../../Context/authorization.jsx'
import { useContext } from 'react'

function SideBar({ 
  setUser,
  isLoading,
  setIsLoading,
  logout, }) {
    const { userData } = useContext(UserContext)
  return (
    <S.MineSideBar className="sidebar">
      <S.SideBarPersonal>
        <S.SideBarPersonalName>{userData.username}</S.SideBarPersonalName>

        <S.SideBarIcon onClick={logout}>
          <svg alt="logout">
            <use xlinkHref="img/sprite.svg#logout"></use>
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

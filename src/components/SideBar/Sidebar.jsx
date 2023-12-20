import * as S from '../SideBar/StyledSideBar.js'
import { CategoryPlayLists } from './CategoryPlaylists.jsx'
import {Link} from 'react-router-dom'


function SideBar() {

  return (
    <S.MineSideBar className="main__sidebar sidebar">
      <S.SideBarPersonal>
        <S.SideBarPersonalName>Vera.Buganova</S.SideBarPersonalName>
        <Link to="/login">
        <S.SideBarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SideBarIcon>
        </Link>
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

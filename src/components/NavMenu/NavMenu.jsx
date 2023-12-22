import {useState} from "react"
import { useNavigate} from 'react-router-dom'
import * as S from "../NavMenu/StyledNavMenu.js"
import {Link} from 'react-router-dom'

function NavMenu ({setUser}) {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    setUser("null");
    navigate("/login");
    };

   return (
   <S.MainNav >
      <S.NavLogo>
      <S.LogoImage src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={toggleVisibility}>
      <S.BurgerLine ></S.BurgerLine>
      <S.BurgerLine ></S.BurgerLine>
      <S.BurgerLine ></S.BurgerLine>
      </S.NavBurger>
      {visible && <  S.NavMenu>
        <S.MenuList>
          <S.MenuItem>
            <Link to="/">
              <S.MenuLink>
                Главное
              </S.MenuLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
          <Link to="/favorites">
            <S.MenuLink>Мой плейлист</S.MenuLink>
          </Link>
          </S.MenuItem>
          <S.MenuItem>
          <S.MenuLink onClick={logout} >Выйти</S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>}

    </S.MainNav>
   )
}
export default NavMenu
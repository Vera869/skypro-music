import {useState} from "react"
import * as S from "../NavMenu/StyledNavMenu.js"
import {Link} from 'react-router-dom'

function NavMenu () {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

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
          <Link to="/login">
            <S.MenuLink>Войти</S.MenuLink>
          </Link>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>}

    </S.MainNav>
   )
}
export default NavMenu
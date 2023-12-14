import {useState} from "react"
import * as S from "../NavMenu/StyledNavMenu.js"

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
            <S.MenuLink href="/">Главное</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="/favorites">Мой плейлист</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="/login">Войти</S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>}

    </S.MainNav>
   )
}
export default NavMenu
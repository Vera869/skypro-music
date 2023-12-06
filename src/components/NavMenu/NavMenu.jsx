import {useState} from "react"
import * as Styled from "../NavMenu/StyledNavMenu.js"


//const StyledNavMenu = styled.div`
//const StyledNavMenu = styled.div`
//const StyledNavMenu = styled.div`

function NavMenu () {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

   return (
   <Styled.MainNav >
      <Styled.NavLogo>
      <Styled.LogoImage src="img/logo.png" alt="logo" />
      </Styled.NavLogo>
      <Styled.NavBurger onClick={toggleVisibility}>
      <Styled.BurgerLine ></Styled.BurgerLine>
      <Styled.BurgerLine ></Styled.BurgerLine>
      <Styled.BurgerLine ></Styled.BurgerLine>
      </Styled.NavBurger>
      {visible && <  Styled.NavMenu>
        <Styled.MenuList>
          <Styled.MenuItem>
            <Styled.MenuLink href="#">Главное</Styled.MenuLink>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <Styled.MenuLink href="#">Мой плейлист</Styled.MenuLink>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <Styled.MenuLink href="../signin.html">Войти</Styled.MenuLink>
          </Styled.MenuItem>
        </Styled.MenuList>
      </Styled.NavMenu>}

    </Styled.MainNav>
   )
}
export default NavMenu
import { Link, useNavigate } from 'react-router-dom'
import * as S from '../SignIn/StyledSignIn'

export const SignIn = ({ setUser }) => {
  const navigate = useNavigate()

  const login = () => {
    localStorage.setItem('user', 'true')
    setUser('user')
    navigate('/')
  }

  return (
    <S.wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin action="#">
            <a href="../">
              <S.ModalLogo>
                <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </a>
            <S.ModaInputLogin type="text" name="login" placeholder="Почта" />
            <S.ModaInputPassword
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalBtnEnter onClick={login}>Войти</S.ModalBtnEnter>
            <S.ModalBtnSignup>
              <Link to="/registration">Зарегистрироваться</Link>
            </S.ModalBtnSignup>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.wrapper>
  )
}

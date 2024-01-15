import { Link, useNavigate } from 'react-router-dom'
import * as S from '../SignIn/StyledSignIn'
import { useState } from 'react'
import {loginUser} from '../../Api'

export const SignIn = ({ user, setUser, isLoginMode, setIsLoginMode }) => {
  const navigate = useNavigate()

  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState()
  console.log("signIn", user);
  const handleClickAuth = () => {
    const login = () => {
      loginUser({ email, password })
      .then(()=>{
        // localStorage.setItem('user', 'true')
        localStorage.setItem("user", JSON.stringify(user));
        setUser('user')
        navigate('/')
      })
      
    }

    if (!email) {
      return setError('Укажите почту')
    }
    if (!password) {
      return setError('Укажите пароль')
    }
     // if() {
    //   return setError('Пользователь с таким email или паролем не найден')
    // }
    else {
      login()
    }
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
            <S.ModalInputLogin
              type="text"
              name="login"
              placeholder="Почта"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
              }}
            />
            <S.ModalInputPassword
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value)
              }}
            />
            <S.ErrorMasege>{error}</S.ErrorMasege>
            <S.ModalBtnEnter onClick={handleClickAuth}>Войти</S.ModalBtnEnter>
            <S.ModalBtnSignup>
              <Link to="/registration">Зарегистрироваться</Link>
            </S.ModalBtnSignup>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.wrapper>
  )
}

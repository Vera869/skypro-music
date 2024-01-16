import { Link, useNavigate } from 'react-router-dom'
import * as S from '../SignIn/StyledSignIn'
import { useState } from 'react'
import {loginUser} from '../../Api'
// import { UserContext } from '../../Context/authorization'
// import { useContext } from 'react'

export const SignIn = ({ user, setUser, isLoginMode, setIsLoginMode }) => {
  const navigate = useNavigate()

  // const { userData } = useContext(UserContext)
  // const { changingUserData } = useContext(UserContext)

  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState()
  const [errorAuthrApi, setErrorAuthrApi] = useState(null)
  console.log("signIn", user);
  console.log(user);

  const handleClickAuth = () => {
    const login = () => {
    try {
      loginUser({ email, password })
      .then(()=>{
        // localStorage.setItem('user', 'true')
        localStorage.setItem("user", JSON.stringify(user));
        // changingUserData(user)
        setIsLoginMode(true)
        setUser("user")
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message)
        setErrorAuthrApi(error.message)
      })
    } finally {
      setIsLoginMode(false)
    }
    }

    if (!email) {
      return setError('Укажите почту')
    }
    if (!password) {
      return setError('Укажите пароль')
    }
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
            <S.ErrorMasege>{errorAuthrApi}</S.ErrorMasege>
            <S.ModalBtnEnter disabled={isLoginMode} onClick={handleClickAuth}>Войти</S.ModalBtnEnter>
            <S.ModalBtnSignup>
              <Link to="/registration">Зарегистрироваться</Link>
            </S.ModalBtnSignup>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.wrapper>
  )
}

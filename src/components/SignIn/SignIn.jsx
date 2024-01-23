import { Link, useNavigate } from 'react-router-dom'
import * as S from '../SignIn/StyledSignIn'
import { useState, useEffect } from 'react'
import {loginUser} from '../../Api'

export const SignIn = ({ user, setUser }) => {
  const navigate = useNavigate()

  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState()
  const [errorAuthrApi, setErrorAuthrApi] = useState(null)
  const [isLoadLogin, setIsLoadLogin] = useState(false)
  console.log("signIn", user);

  const handleClickAuth = () => {
    
    const login = () => {
      setIsLoadLogin(true)
      loginUser({ email, password })
      .then(()=>{
        
        localStorage.setItem("user", JSON.stringify({ email, password }));
       
        setUser("user")
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message)
        setErrorAuthrApi(error.message)
      }).finally(() => {
        setIsLoadLogin(false)
    })
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
  useEffect(() => {
    setError(null)
  }, [isLoadLogin, email, password])
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
            <S.ModalBtnEnter type='button' disabled={isLoadLogin} onClick={handleClickAuth}>Войти</S.ModalBtnEnter>
            <S.ModalBtnSignup>
              <Link to="/registration">Зарегистрироваться</Link>
            </S.ModalBtnSignup>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.wrapper>
  )
}

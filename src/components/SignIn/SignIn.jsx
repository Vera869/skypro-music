import { Link, useNavigate } from 'react-router-dom'
import * as S from '../SignIn/StyledSignIn'
import { useState, useEffect, useContext } from 'react'
import { getToken, loginUser } from '../../Api'
import { UserContext } from '../../Context/authorization'
import { useDispatch } from 'react-redux'
import { setAccess, setRefresh } from '../../Store/Slices/authorization'

export const SignIn = ({ setUser }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorAuthrApi, setErrorAuthrApi] = useState(null)
  const [isLoadLogin, setIsLoadLogin] = useState(false)

  const { changingUserData } = useContext(UserContext)

  const handleClickAuth = () => {
    const login = () => {
      setIsLoadLogin(true)
      loginUser({ email, password })
        .then((newUser) => {
          localStorage.setItem('user', JSON.stringify(newUser))
          changingUserData(newUser)
          setUser(newUser)
          getToken({ email, password }).then((res) => {
            localStorage.setItem('accessToken', JSON.stringify(res.access))
            localStorage.setItem('refreshToken', JSON.stringify(res.refresh))
            dispatch(setAccess(res.access))
            dispatch(setRefresh(res.refresh))
            navigate('/')
          })
        })
        .catch((error) => {
          console.log(error.message)
          setErrorAuthrApi(error.message)
        })
        .finally(() => {
          setIsLoadLogin(false)
        })
    }

    if (!email) {
      return setError('Укажите почту')
    }
    if (!password) {
      return setError('Укажите пароль')
    } else {
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
            <S.ErrorMasege>{error || errorAuthrApi}</S.ErrorMasege>
            <S.ModalBtnEnter
              type="button"
              disabled={isLoadLogin}
              onClick={handleClickAuth}
            >
              Войти
            </S.ModalBtnEnter>
            <S.ModalBtnSignup>
              <Link to="/registration">Зарегистрироваться</Link>
            </S.ModalBtnSignup>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.wrapper>
  )
}

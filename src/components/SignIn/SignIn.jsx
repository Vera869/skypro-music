import { Link, useNavigate } from 'react-router-dom'
import * as S from '../SignIn/StyledSignIn'
import { useState } from 'react'

export const SignIn = ({ setUser }) => {
  const navigate = useNavigate()

  const [error, setError] = useState(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState()

  const handleClickAuth = () => {
    const login = () => {
      localStorage.setItem('user', 'true')
      setUser('user')
      navigate('/')
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

  // export default function AuthPage({ isLoginMode = false }) {
  //   const [error, setError] = useState(null);

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [repeatPassword, setRepeatPassword] = useState("");

  //   const handleLogin = async ({ email, password }) => {
  //     alert(`Выполняется вход: ${email} ${password}`);
  //     setError("Неизвестная ошибка входа");
  //   };

  //   const handleRegister = async () => {
  //     alert(`Выполняется регистрация: ${email} ${password}`);
  //     setError("Неизвестная ошибка регистрации");
  //   };

  //   // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  //   useEffect(() => {
  //     setError(null);
  //   }, [isLoginMode, email, password, repeatPassword]);

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

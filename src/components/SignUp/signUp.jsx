import { useState, useEffect } from 'react';
import * as S from '../SignUp/StyledSignUp'
import {registrUser} from '../../Api'
import {useNavigate } from 'react-router-dom'
// import {UserContext} from '../../Context/authorization'

export const SignUp = ({ user, setUser, isLoginMode, setIsLoginMode }) => {
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorRegistrApi, setErrorRegistrApi] = useState(null)

  const navigate = useNavigate()

  const handleClickRegistr = async () => {
    if(!email ) {
      return setError('Укажите почту')
    }
    if(!password || !repeatPassword ) {
      return setError('Укажите пароль')
    }
    if(password !== repeatPassword) {
      return setError('Пароли не совпадают')
    }
    try{
      registrUser({ email, password })
    .then(() => {
      localStorage.setItem("user", JSON.stringify(user));
      changingUserData(user);
      setUser(user)
      setIsLoginMode(true);
      navigate("/login");
    }).catch((error) => {
      console.log(error.message)
      setErrorRegistrApi(error.message)
    })
    } finally{
      setIsLoginMode(false);
    } 
  }

  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);
  return (
    <S.Wrapper>
      <S.ContainerSignUp>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <a href="../">
              <S.ModalLogo>
                <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </a>
            <S.ModalInput
              className="login"
              type="text"
              name="login"
              placeholder="Почта"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <S.ModalInput
              className="password-first"
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <S.ModalInput
              className="password-double"
              type="password"
              name="password"
              placeholder="Повторите пароль"
              value={repeatPassword}
              onChange={(event) => {
                setRepeatPassword(event.target.value);
              }}
            />
            <S.ErrorMasege>{error}</S.ErrorMasege>
            <S.ErrorMasege>{errorRegistrApi}</S.ErrorMasege>
            <S.ModalBtnSignUp onClick={handleClickRegistr}
             disabled={isLoginMode}
            >{isLoginMode ? "Регистрация" : "Зарегистрироваться"}</S.ModalBtnSignUp>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignUp>
    </S.Wrapper>
  )
}

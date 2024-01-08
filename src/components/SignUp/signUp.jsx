import { useState } from 'react';
import * as S from '../SignUp/StyledSignUp'

export const SignUp = () => {
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleClickRegistr = () => {
    if(!email ) {
      return setError('Укажите почту')
    }
    if(!password || !repeatPassword ) {
      return setError('Укажите пароль')
    }
    if(password !== repeatPassword) {
      return setError('Пароли не совпадают')
    }
  }

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
            <S.ModalBtnSignUp onClick={handleClickRegistr}
            to="/login"
            >Зарегистрироваться</S.ModalBtnSignUp>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignUp>
    </S.Wrapper>
  )
}

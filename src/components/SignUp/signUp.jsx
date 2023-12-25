import * as S from '../SignUp/StyledSignUp'

export const SignUp = () => {
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
            />
            <S.ModalInput
              className="password-first"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalInput
              className="password-double"
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <S.ModalBtnSignUp to="/login">Зарегистрироваться</S.ModalBtnSignUp>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignUp>
    </S.Wrapper>
  )
}

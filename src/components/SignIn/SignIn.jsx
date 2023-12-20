import '../SignIn/SignIn.css'
import {Link, useNavigate} from 'react-router-dom'

export const SignIn = ({setUser}) => {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("user", "true");
    setUser("user");
    navigate("/");
  }

   return (
      <div className="wrapper">
      <div className="container-enter">
        <div className="modal__block">
          <form className="modal__form-login" action="#">
            <a href="../">
              <div className="modal__logo">
                <img src="../img/logo_modal.png" alt="logo" />
              </div>
            </a>
            <input
              className="modal__input login"
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className="modal__input password"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button className="modal__btn-enter" onClick={login}>
              Войти
            </button>
            <button className="modal__btn-signup">
              <Link to="/registration">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
   )
} 
import { SignUp } from '../../components/SignUp/signUp.jsx'

export const Reg = ({ user, setUser, isLoginMode, setIsLoginMode }) => {
  return (
    <>
      <SignUp user={user} setUser={setUser}  isLoginMode={isLoginMode} setIsLoginMode={setIsLoginMode}/>
    </>
  )
}

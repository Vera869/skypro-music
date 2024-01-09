import { SignIn } from '../../components/SignIn/SignIn'

export const Login = ({ user, setUser, isLoginMode, setIsLoginMode }) => {
  return (
    <>
      <SignIn user={user} setUser={setUser}  isLoginMode={isLoginMode} setIsLoginMode={setIsLoginMode}/>
    </>
  )
}

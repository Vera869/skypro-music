import { AppRoutes } from './routes'
import { UserContext } from './Context/authorization'
import { useState } from 'react'

export const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [isLoginMode, setIsLoginMode] = useState(false)

  return (
    <div className="App">
      <UserContext.Provider
        value={{ userData: user, changingUserData: setUser }}
      >
        <AppRoutes
          user={user}
          setUser={setUser}
          isLoginMode={isLoginMode}
          setIsLoginMode={setIsLoginMode}
        />
      </UserContext.Provider>
    </div>
  )
}

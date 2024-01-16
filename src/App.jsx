import { AppRoutes } from "./routes"
import {UserContext} from './Context/authorization'
import { useState } from "react";

export const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("accessToken")));
  
  const [isLoginMode, setIsLoginMode] = useState(false);
  // console.log(user);
   
   return <div className="App">
     <UserContext.Provider
        value={{ userData: user, changingUserData: setUser, tokenData: token, changingTokenData: setToken }} >
        <AppRoutes user={user} setUser={setUser} isLoginMode={isLoginMode} setIsLoginMode={setIsLoginMode}/>
      </UserContext.Provider>
     
 </div>
}
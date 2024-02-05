import { Routes, Route, useNavigate } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import { NotFound } from './pages/not-found/not-foundPage'
import { Favorites } from './pages/Favorites/favorites'
import { Login } from './pages/Login/login'
import { Reg } from './pages/Registration/registration'
import { PlayListCategory } from '../src/pages/Category/category'
import { Main } from '../src/pages/Main/MainPage'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTrack, setIsPlay } from './Store/Slices/sliceTrack'
import { LayoutPage } from './pages/layout/LayoutPage'

export const AppRoutes = ({ user, setUser, isLoginMode, setIsLoginMode }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()
  console.log(Boolean(localStorage.getItem('user')))
  const isPlay = useSelector((state) => state.tracks.isPlay)

  const logout = () => {
    dispatch(setActiveTrack({ track: {} }))
    if(isPlay == true) {
      dispatch(setIsPlay())
    }
    localStorage.clear()
    navigate('/login')
  }
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Login
            user={user}
            setUser={setUser}
            isLoginMode={isLoginMode}
            setIsLoginMode={setIsLoginMode}
          />
        }
      />
      <Route
        path="/registration"
        element={
          <Reg
            user={user}
            setUser={setUser}
            isLoginMode={isLoginMode}
            setIsLoginMode={setIsLoginMode}
          />
        }
      />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route
          path="/"
          element={
            <LayoutPage
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setUser={setUser}
              logout={logout}
            />
          }
        >
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={
              <Main
                setUser={setUser}
                logout={logout}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route
            path="/category/:id"
            element={
              <PlayListCategory
                setUser={setUser}
                logout={logout}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                setUser={setUser}
                logout={logout}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />
        </Route>
      </Route>
    </Routes>
  )
}

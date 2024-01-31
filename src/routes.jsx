import { Routes, Route, useNavigate } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import { NotFound } from './pages/not-found/not-foundPage'
import { Favorites } from './pages/Favorites/favorites'
import { Login } from './pages/Login/login'
import { Reg } from './pages/Registration/registration'
import { PlayListCategory } from '../src/pages/Category/category'
import { arrayCategorys } from '../src/components/SideBar/ArrayCategory'
import { Main } from '../src/pages/Main/MainPage'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveTrack } from './Store/Slices/sliceTrack'
import { LayoutPage } from './pages/layout/LayoutPage'

export const AppRoutes = ({ user, setUser, isLoginMode, setIsLoginMode }) => {
  const navigate = useNavigate()
  const [isplay, setIsPlay] = useState(true)
  const [isVisiblePlayer, setVisiblePlayer] = useState(false)
  const dispatch = useDispatch()
  console.log(Boolean(localStorage.getItem('user')))

  const logout = () => {
    dispatch(setActiveTrack({ track: {} }))
    setIsPlay(false)
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
              setUser={setUser}
              logout={logout}
              isplay={isplay}
              setIsPlay={setIsPlay}
              isVisiblePlayer={isVisiblePlayer}
              setVisiblePlayer={setVisiblePlayer}
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
                isplay={isplay}
                setIsPlay={setIsPlay}
              />
            }
          />
          <Route
            path="/category/:id"
            element={<PlayListCategory arrayCategorys={arrayCategorys} />}
          />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Route>
    </Routes>
  )
}

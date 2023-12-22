import {Routes, Route} from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoute"
import { useState } from "react"

import { NotFound } from "./pages/not-found/not-foundPage"
import {Favorites} from "./pages/Favorites/favorites"
import {Login} from "./pages/Login/login"
import {Reg} from './pages/Registration/registration'
import {PlayListCategory} from '../src/pages/Category/category'
import {arrayCategorys} from '../src/components/SideBar/ArrayCategory'
import {Main} from '../src/pages/Main/MainPage'

export const AppRoutes = () => {
   const [user, setUser] = useState(localStorage.getItem("user"))

   console.log(Boolean(localStorage.getItem("user")));
   return (
      <Routes>
         <Route path="/login" element={<Login setUser={setUser} />} />
         <Route path="/registration" element={<Reg />} />
         <Route element={<ProtectedRoute isAllowed={Boolean(user)}/>}>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Main setUser={setUser} />} />
            <Route path="/category/:id" element={<PlayListCategory arrayCategorys={arrayCategorys} />} />
            <Route path="/favorites" element={<Favorites />} />
         </Route>
      </Routes>
   )
}
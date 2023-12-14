import {Routes, Route} from "react-router-dom"
import {App} from '../src/App'
import { NotFound } from "./pages/not-found/not-foundPage"
import {Favorites} from "./pages/Favorites/favorites"
import {Login} from "./pages/Login/login"
import {Reg} from './pages/Registration/registration'
import {PlayListCategory} from '../src/pages/Category/category'

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<App />} />
         <Route path="*" element={<NotFound />} />
         <Route path="/category/:id" element={<PlayListCategory />} />
         <Route path="/login" element={<Login />} />
         <Route path="/favorites" element={<Favorites />} />
         <Route path="/registration" element={<Reg />} />
      </Routes>
   )
}
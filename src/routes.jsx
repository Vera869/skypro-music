import {Routes, Route} from "react-router-dom"
import {App} from '../src/App'
import { NotFound } from "./pages/not-found/not-foundPage"

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<App />} />
         <Route path="*" element={<NotFound />} />
         {/* <Route path="/category/:id" element={<NotFound />} /> */}
         {/* <Route path="/login" element={<NotFound />} /> */}
         {/* <Route path="/Favorites" element={<NotFound />} /> */}
         {/* <Route path="/registration" element={<NotFound />} /> */}
         {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
   )
}
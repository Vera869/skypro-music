import {Routes, Route} from "react-router-dom"
import

export const appRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<App/>} />
      </Routes>
   )
}
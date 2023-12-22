import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ isAllowed }) => {
  if (!isAllowed) {
    return <Navigate to={'/login'} replace={true} />
  }

  return <Outlet />
}

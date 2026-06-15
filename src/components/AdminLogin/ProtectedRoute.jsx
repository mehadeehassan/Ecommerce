import Cookies from "js-cookie"
import { Navigate } from "react-router"

export default function ProtectedRoute({ children }) {
  const token = Cookies.get("adminToken")

  if (!token) {
    return <Navigate to="/admin-login" replace />
  }

  return children
}
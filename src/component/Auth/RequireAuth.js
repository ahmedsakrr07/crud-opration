
import { useContext } from "react"
import { User } from "../context/context"
import { Navigate, Outlet } from "react-router-dom"
export default function RequireAuth() {
    const user = useContext(User)
    console.log(user)
    return user.auth.userDetails ? <Outlet /> : <Navigate to="/login" />
}
import { userContext } from "./UserContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const { user, setUser } = useContext(userContext)
    if (!user) {
        return <Navigate to='/' />
    }
    return (
        children
    )
}
export default ProtectedRoute
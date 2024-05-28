import { useContext } from "react";
import { Navigate } from "react-router-dom";

// Context
import { userStatusContext } from "../contexts/UserStatus";
import { jwtDecode } from "jwt-decode";

function ProtectedRoute({children, roles, noPerms, redirectTo}){
    const { user } = useContext(userStatusContext);
    if(user.token){
        const decoded = jwtDecode(user.token);
        return roles && roles.some((role) => decoded.roles.includes(role)) ? children : <Navigate replace to={noPerms ?? "/"} />;
    }
    return (
        <Navigate replace to={redirectTo ?? "/login"} />
    )
}

export default ProtectedRoute;
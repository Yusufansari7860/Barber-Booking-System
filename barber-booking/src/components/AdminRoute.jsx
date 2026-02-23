import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function AdminRoute({ children}) {
    const { currentUser} = useContext(AuthContext);

    if (!currentUser){
        return <Navigate to="/login" />;
    }

    if (currentUser.role !== "admin"){
        return <Navigate to="/" />;
    }

    return children;
}

export default AdminRoute;
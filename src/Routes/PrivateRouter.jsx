import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="spinner-dot-intermittent [--spinner-color:var(--green-8)]"></div>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>

};

export default PrivateRouter;
import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import Loading from "../Private/Loading";

const PrivateRoute = ({children}) => {
    const navigate = useNavigate()
    const data = useLoaderData()
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        children
    } else {
        navigate('/login')
    }
   console.log(data);
    return children
};

export default PrivateRoute;
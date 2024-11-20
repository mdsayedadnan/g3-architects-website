import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const PrivateRoute = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;
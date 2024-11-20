import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import Loading from "../Private/Loading";

const CouponPage = ({ children }) => {
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
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            coupon page
        </div>
    );
};

export default CouponPage;
import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login";
import MainLayout from "../Components/MainLayout";
import About from "../Components/About";
import Error from "../Components/Error";
import Register from "../Components/Register";
import AllBrands from "../Components/AllBrands";
import MyProfile from "../Components/MyProfile";
import CouponPage from "../Components/CouponPage";
import Forget from "../Private/Forget";
import PrivateRoute from "../Private/PrivateRoute";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        loader:()=> fetch('../brads.json')
    },
    {
        path: '/brands',
        element: <AllBrands></AllBrands>,
        loader:()=> fetch('../brads.json')
    },
    {
        path: '/myProfile',
        element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
    },
    {
        path: '/brands/:id',
        element: <CouponPage></CouponPage>,
        // loader: async ({params})=> 
        //     const res= await fetch(`/brads.json`)
        //    const data= await res.json()
        //    const brands = data.find(d =>d._id == useParams.id)
        //    return brands

    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },

    {
        path: '/about',
        element:<About></About>
    },
    {
        path:'/forget',
        element:<Forget></Forget>
    },
    {
        path: '*',
        element: <Error></Error>
    },


])

export default Router;
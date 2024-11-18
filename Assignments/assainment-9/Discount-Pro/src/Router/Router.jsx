import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login";
import MainLayout from "../Components/MainLayout";
import About from "../Components/About";
import Error from "../Components/Error";
import Register from "../Components/Register";
import AllBrands from "../Components/AllBrands";

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
        path: '*',
        element: <Error></Error>
    },


])

export default Router;
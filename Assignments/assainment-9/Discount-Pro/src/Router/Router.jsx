import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login";
import MainLayout from "../Components/MainLayout";
import About from "../Components/About";
import Error from "../Components/Error";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>
    },
    {
        path: '/brands',
        element: <h1>brans</h1>
    },
    {
        path: '/login',
        element: <Login></Login>
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
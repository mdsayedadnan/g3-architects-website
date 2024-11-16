import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../LayOut/HomeLayout";
import CategoryNews from "../Components/CategoryNews";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'',
                element:<Navigate to="/category/01"></Navigate>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) =>
                    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                        .then((res) => res.json())
            },
        ]
    },
    {
        path:'/news',
        element:<h1>news Layout</h1>
    },
    {
        path:'auth',
        element:<h1>Login</h1>
    },
    {
        path:'*',
        element:<h1>Error</h1>
    },
])

export default Router;
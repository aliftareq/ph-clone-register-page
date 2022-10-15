import { createBrowserRouter } from "react-router-dom";
import AboutUser from "../Components/AboutUser/AboutUser";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import ForgetPassword from "../Components/ForgetPassword/ForgetPassword";
import LoginPage from "../Components/LoginPage/LoginPage";
import RegisterPage from '../Components/RegisterPage/RegisterPage'
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <RegisterPage></RegisterPage>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            },
            {
                path: '/forgetPassword',
                element: <ForgetPassword></ForgetPassword>
            },
            {
                path: '/aboutUser',
                element: <AboutUser></AboutUser>
            },
        ]
    }
])
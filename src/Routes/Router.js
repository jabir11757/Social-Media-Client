import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Media from "../pages/Media/Media";
import Post from "../pages/Media/Post";
import Message from "../pages/Message/Message";
import Login from "../pages/Shared/Login/Login";
import Signup from "../pages/Shared/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/media',
                element: <PrivateRoute><Media /></PrivateRoute>
            },
            {
                path: '/media/:id',
                element: <Post />,
                loader: ({ params }) => fetch(`http://localhost:5000/posts/${params.id}`)
            },
            {
                path: '/about',
                element: <PrivateRoute><About /></PrivateRoute>
            },
            {
                path: '/message',
                element: <PrivateRoute><Message /></PrivateRoute>
            },
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    }
])
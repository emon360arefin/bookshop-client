import {
    createBrowserRouter
} from "react-router-dom";
import Landing from "../Component/Pages/Landing/Landing";
import Home from "../Component/Pages/Home/Home";
import About from "../Component/Pages/About/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing></Landing>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
]);

export default router